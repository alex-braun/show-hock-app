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

// TRACK THIS SHOW////
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
// CREATE A RECORD OF THE SHOW...///
    let show = this.get('store').createRecord('show', {
      eventId: event.id,
      eventName: event.displayName,
      regionId: event.venue.metroArea.id,
      regionName: event.venue.metroArea.displayName,
      venueId: event.venue.id,
      venueName: event.venue.displayName,
      start: start,
      end: end,
      city: event.location.city
    });
// ...AND UPDATE THE USER'S CALENDAR ALONG WITH ADDING PERFORMER'S ARRAY///
    show.save()
    .then((trackingRes) => {
      let calendar = this.get('store').createRecord('calendar', {
        eventId: event.id,
        show: trackingRes,
      });
      calendar.save()
      .then(() => this.get('getUserCalendars').getCalendar())
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
    });
  })
////...UNLESS THE SHOW RECORD EXISTS. THEN FIND THE RECORD, AND CREATE THAT USER'S CALENDAR.
  .catch((response) => {
    this.get('store').findRecord('show', response.errors[0].id)
    .then((res) => {
    let calendar = this.get('store').createRecord('calendar', {
      eventId: event.id,
      event: res,
    });
    res.get('calendars').pushObject(calendar);
    calendar.save().then(() => res.save());
    })
    .then(() => this.get('getUserCalendars').getCalendar());
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
        .then(() => this.get('getUserCalendars').getCalendar());
      });
    }
  }
});
