import Ember from 'ember';

export default Ember.Route.extend({

  venueId: null,

  getUserCalendars: Ember.inject.service(),

  queryParams: {
    page: {
      refreshModel: true
    },
  },

  beforeModel(param) {
    this._super(...arguments);
    this.set('venueId', param.params['venue.event']);
  },

  model(params) {
    let venueId = this.get('venueId');
      return this.get('store').findRecord('venue-calendar', venueId.venue_id, { adapterOptions: { page: params.page }})
      .then((result) => {
        let meta = result.get('meta');
        return meta, result;
    });
  },

  actions: {
    goToConcert(concert) {
      this.transitionTo('venue.event.concert', concert);
    },

    //// this.get('getUserCalendars').getCalendar() updates the current user calendar.
    trackEvent(event) {
        let start;
        let end;
        if (event.start) {
          start = event.start.date;
        } else {
          start = null;
        }
        if (event.end) {
          end = event.end.date;
        } else {
          end = null;
        }
        let show = this.get('store').createRecord('show', {
          event_id: event.id,
          event_name: event.displayName,
          region_id: event.venue.metroArea.id,
          region_name: event.venue.metroArea.displayName,
          venue_id: event.venue.id,
          venue_name: event.venue.displayName,
          start: start,
          end: end,
          city: event.location.city
        });
        show.save()
        .then((trackingRes) => {
          let calendar = this.get('store').createRecord('calendar', {
            event_id: trackingRes.get('event_id'),
            show_id: trackingRes.get('id'),
            show: trackingRes,
          });
          calendar.save()
          .then(() => this.get('getUserCalendars').getCalendar())
          .then(() => {
          for (let i = 0; i < event.performance.length; i++) {
            let perform = this.get('store').createRecord('performer', {
              show_id: trackingRes.get('id'),
              artist_id: event.performance[i].artist.id,
              artist_name: event.performance[i].artist.displayName,
              artist_img: event.performance[i].artist.imageUrl,
            });
            perform.save();
          }
        });
      })
      .catch((response) => {
        let showId = response.errors[0].id;
        let calendar = this.get('store').createRecord('calendar', {
          event_id: event.id,
          show_id: showId,
          show: showId,
        });
        calendar.save()
        .then(() => this.get('getUserCalendars').getCalendar());
      });
    },


    unTrackEvent(event) {
      let userCalendar = this.get('getUserCalendars').userCalendar;
         let calendarArr = userCalendar.get('content');
         let id;
      calendarArr.forEach(function(each) {
        if (each._data.event_id === event.id) {
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
