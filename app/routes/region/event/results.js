import Ember from 'ember';

export default Ember.Route.extend({

  getUserCalendars: Ember.inject.service(),

  regionId: null,

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

  beforeModel(data) {
    this._super(...arguments);
    let id = parseInt(data.params['region.event'].region_id);
    this.set('regionId', id);
  },

  model(params) {
    let id = this.get('regionId');
    return this.get('store').findRecord('region', id, {
    adapterOptions: { page: params.page,
                      per_page: 50,
                      min_date: params.min_date,
                      max_date: params.max_date }
    })
    .then((result) => {
      let meta = result.get('meta');
      return meta, result;
    });
  },

  actions: {

    goToConcert(concertId) {
      this.transitionTo('region.event.concert', concertId, {
        queryParams: {
          page: 1
        }
      });
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
