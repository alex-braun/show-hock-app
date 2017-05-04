import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({

  userLocationSetting: Ember.inject.service(),
  accessArtistName: Ember.inject.service(),
  count: Ember.inject.service('access-artist-show-count'),
  getUserCalendars: Ember.inject.service(),

  artistEventParams: null,

  queryParams: {
    page: {
      refreshModel: true
    },
    min_date: {
      refreshModel: true
    },
    max_date: {
      refreshModel: true
    }
  },

  beforeModel(param) {
    this._super(...arguments);
    this.get('accessArtistName').add(param.params['artist.event']);
    this.set('artistEventParams', param.params['artist.event']);

    return this.get('userLocationSetting').getRegion().then(() => {
      return this.set('regionName',this.get('userLocationSetting').regionName),
             this.set('regionId', this.get('userLocationSetting').regionId);
    });
  },

  model (params) {
    let allParams = {
      location: this.get('userLocationSetting').regionId,
      artistName: this.get('artistEventParams').artist_name,
      artistId: this.get('artistEventParams').artist_id
    };

    return Ember.RSVP.hash({

      artist: this.get('store').findRecord('artist', allParams.artistId, {
        adapterOptions: { page: params.page,
                          min_date: params.min_date,
                          max_date: params.max_date }
      })
      .then((result) => {
        let meta = result.get('meta');
        return meta, result;
      }),

      upcomingInfo: this.get('store').query('upcoming-event', {
        location: allParams.location,
        artist: allParams.artistName
      })
      .then((result) => {
        return result;
      }),
    });
  },

  afterModel(model) {
    let meta = model.artist.get('meta');
    this.get('count').add(meta.total_entries);
  },

  actions: {
    goToConcert(value) {
      this.transitionTo('artist.event.concert', value.id);
    },

    goToAuthenticate(eventId) {
      this.transitionTo('sign-up.new', eventId);
    },

    // TRACK THIS SHOW////
    trackEvent(event) {
      let start;
      let end;
      if (event.start) {
        start = moment(event.start.date).format();
      } else {
        start = null;
      }
      if (event.end) {
        end = moment(event.end.date).format();
      } else {
        end = start;
      }
      // CREATE A RECORD OF THE SHOW...///
      let show = this.get('store').createRecord('show', {
        eventId: event.id,
        eventName: event.displayName,
        eventLink: event.uri,
        regionId: event.venue.metroArea.id,
        regionName: event.venue.metroArea.displayName,
        venueId: event.venue.id,
        venueName: event.venue.displayName,
        startDate: start,
        endDate: end,
        city: event.location.city
      });
      // ...AND SAVE THE USER'S CALENDAR ALONG WITH ADDING PERFORMER'S ARRAY///
        show.save()
        .then((trackingRes) => {
          let calendar = this.get('store').createRecord('calendar', {
            eventId: event.id,
            endDate: end,
            show: trackingRes,
          });
          calendar.save()
          .then(() => {
          for (let i = 0; i < event.performance.length; i++) {
            let perform = this.get('store').createRecord('performer', {
              show: trackingRes,
              artistId: event.performance[i].artist.id,
              artistName: event.performance[i].artist.displayName,
              artistImg: event.performance[i].artist.imageUrl,
            });
            perform.save();
          }
        }).then(() => {
          show.reload();
          this.get('getUserCalendars').getCalendar();
        });
      })
    ////...UNLESS THE SHOW RECORD EXISTS. THEN FIND THE RECORD, AND CREATE THAT USER'S CALENDAR (`302` FOUND ERRROR).
        .catch((existingShow) => {
          this.get('store').findRecord('show', existingShow.errors[0].id)
          .then((show) => {
          let calendar = this.get('store').createRecord('calendar', {
            eventId: event.id,
            endDate: end,
            show: show,
          });
          calendar.save()
          .then(() => {
            show.reload();
            this.get('getUserCalendars').getCalendar();
          });
        });
      });
    },


    unTrackEvent(event) {
      let userCalendar = this.get('getUserCalendars').userCalendar;
         let calendarArr = userCalendar.get('content');
         let id;
      calendarArr.forEach(function(each) {
        if (each._data.eventId === event.id) {
          id = each.id;
        }
      });
      this.get('store').findRecord('calendar', id, { backgroundReload: false }).then((calendar) => {
        calendar.destroyRecord()
        .then(() => {
          this.get('getUserCalendars').getCalendar();
        });
      });
    }
  }
});
