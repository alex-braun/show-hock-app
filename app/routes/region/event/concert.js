import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({

  getUserCalendars: Ember.inject.service(),

  model (param) {
    return this.get('store').findRecord('concert', param.concert_id)
    .then((result) => {

      if (result.get('venue').id) {

        return this.get('store').findRecord('venue-calendar', result.get('venue').id, { adapterOptions: { page: 1 }})

        .then((calendar) => {
          let meta = calendar.get('meta');
          result.set('calendar', calendar);
          return meta, result;

        });
      } else {
        return result;
      }
    });
  },

  actions: {
    goToArtist(name, id) {
      this.transitionTo('artist.event.results',
          name,
          id,
          { queryParams: {
              page: 1,
            }
      });
    },

    goToVenue(id) {
      this.transitionTo('venue.event.results',
          id,
          { queryParams: {
              page: 1,
            }
      });
    },

    goToAuthenticate(eventId) {
      this.transitionTo('sign-up.new', eventId);
    },

    // TRACK THIS SHOW////
    trackEvent(event) {
      let start;
      let end;
      if (event.get('start')) {
        start = moment(event.get('start').date).format();
      } else {
        start = null;
      }
      if (event.get('end')) {
        end = moment(event.get('end').date).format();
      } else {
        end = start;
      }
    // CREATE A RECORD OF THE SHOW...///
      let show = this.get('store').createRecord('show', {
        eventId: event.get('id'),
        eventName: event.get('displayName'),
        eventLink: event.get('uri'),
        regionId: event.get('venue').metroArea.id,
        regionName: event.get('venue').metroArea.displayName,
        venueId: event.get('venue').id,
        venueName: event.get('venue').displayName,
        startDate: start,
        endDate: end,
        city: event.get('location').city
      });
    // ...AND SAVE THE USER'S CALENDAR ALONG WITH ADDING PERFORMER'S ARRAY///
      show.save()
      .then((trackingRes) => {
        let calendar = this.get('store').createRecord('calendar', {
          eventId: event.get('id'),
          endDate: end,
          show: trackingRes,
        });
        calendar.save()
        .then(() => {
        for (let i = 0; i < event.get('performance').length; i++) {
          let perform = this.get('store').createRecord('performer', {
            show: trackingRes,
            artistId: event.get('performance')[i].artist.id,
            artistName: event.get('performance')[i].artist.displayName,
            artistImg: event.get('performance')[i].artist.image_url,
          });
          perform.save();
        }
        })
        .then(() => {
          show.reload();
          this.get('getUserCalendars').getCalendar();
        });
      })

    ////...UNLESS THE SHOW RECORD EXISTS. THEN FIND THE RECORD, AND CREATE THAT USER'S CALENDAR.
      .catch((existingShow) => {
        this.get('store').findRecord('show', existingShow.errors[0].id)
        .then((show) => {
        let calendar = this.get('store').createRecord('calendar', {
          eventId: event.get('id'),
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
        if (each._data.eventId === parseInt(event.id)) {
          id = each.id;
        }
      });
      this.get('store').findRecord('calendar', id, { backgroundReload: false }).then((calendar) => {
        calendar.destroyRecord()
        .then(() => this.get('getUserCalendars').getCalendar());
      });
    }
  }
});
