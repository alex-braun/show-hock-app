import Ember from 'ember';
// import moment from 'moment';

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
      this.transitionTo('venue.event.concert', concert.id, {
        queryParams: {
          page: 1
        }
      });
    },

    goToAuthenticate(event) {
      this.transitionTo('sign-up.new', event);
    },

    // // TRACK THIS SHOW////
    // trackEvent(event) {
    //   let start;
    //   let end;
    //   if (event.start) {
    //     start = moment(event.start.date).format();
    //   } else {
    //     start = null;
    //   }
    //   if (event.end) {
    //     end = moment(event.end.date).format();
    //   } else {
    //     end = start;
    //   }
    //   // CREATE A RECORD OF THE SHOW...///
    //   let show = this.get('store').createRecord('show', {
    //     eventId: event.id,
    //     eventName: event.displayName,
    //     eventLink: event.uri,
    //     regionId: event.venue.metroArea.id,
    //     regionName: event.venue.metroArea.displayName,
    //     venueId: event.venue.id,
    //     venueName: event.venue.displayName,
    //     startDate: start,
    //     endDate: end,
    //     city: event.location.city
    //   });
    //   // ...AND SAVE THE USER'S CALENDAR ALONG WITH ADDING PERFORMER'S ARRAY///
    //     show.save()
    //     .then((trackingRes) => {
    //       let calendar = this.get('store').createRecord('calendar', {
    //         eventId: event.id,
    //         endDate: end,
    //         show: trackingRes,
    //       });
    //       calendar.save()
    //       .then(() => {
    //       for (let i = 0; i < event.performance.length; i++) {
    //         let perform = this.get('store').createRecord('performer', {
    //           show: trackingRes,
    //           artistId: event.performance[i].artist.id,
    //           artistName: event.performance[i].artist.displayName,
    //           artistImg: event.performance[i].artist.imageUrl,
    //         });
    //         perform.save();
    //       }
    //     }).then(() => {
    //       show.reload();
    //       this.get('getUserCalendars').getCalendar();
    //     });
    //   })
    // ////...UNLESS THE SHOW RECORD EXISTS. THEN FIND THE RECORD, AND CREATE THAT USER'S CALENDAR (`302` FOUND ERRROR).
    //     .catch((existingShow) => {
    //       this.get('store').findRecord('show', existingShow.errors[0].id)
    //       .then((show) => {
    //       let calendar = this.get('store').createRecord('calendar', {
    //         eventId: event.id,
    //         endDate: end,
    //         show: show,
    //       });
    //       calendar.save()
    //       .then(() => {
    //         show.reload();
    //         this.get('getUserCalendars').getCalendar();
    //       });
    //     });
    //   });
    // },
    //
    //
    // unTrackEvent(event) {
    //   let userCalendar = this.get('getUserCalendars').userCalendar;
    //      let calendarArr = userCalendar.get('content');
    //      let id;
    //   calendarArr.forEach(function(each) {
    //     if (each._data.eventId === event.id) {
    //       id = each.id;
    //     }
    //   });
    //   this.get('store').findRecord('calendar', id, { backgroundReload: false }).then((calendar) => {
    //     calendar.destroyRecord()
    //     .then(() => {
    //       this.get('getUserCalendars').getCalendar();
    //     });
    //   });
    // }
  }
});
