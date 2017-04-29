import Ember from 'ember';

export default Ember.Route.extend({

  getUserCalendars: Ember.inject.service(),

  model (param) {
    return this.get('store').findRecord('concert', param.concert_id);
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

    trackEvent(event) {
      let start;
      let end;
      if (event.get('start')) {
        start = event.get('start').date;
      } else {
        start = null;
      }
      if (event.get('end')) {
        end = event.get('end').date;
      } else {
        end = null;
      }
      let show = this.get('store').createRecord('show', {
        event_id: parseInt(event.id),
        event_name: event.get('displayName'),
        region_id: event.get('venue').metroArea.id,
        region_name: event.get('venue').metroArea.displayName,
        venue_id: event.get('venue').id,
        venue_name: event.get('venue').displayName,
        start: start,
        end: end,
        city: event.get('location').city
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
        .then(() => {
          this.get('getUserCalendars').getCalendar();
        });
      });
    },

    unTrackEvent(event) {
      let userCalendar = this.get('getUserCalendars').userCalendar;
         let calendarArr = userCalendar.get('content');
         let id;
      calendarArr.forEach(function(each) {
        if (each._data.event_id === parseInt(event.get('id'))) {
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
