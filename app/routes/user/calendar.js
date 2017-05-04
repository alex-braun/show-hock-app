import Ember from 'ember';

export default Ember.Route.extend({

  getUserCalendars: Ember.inject.service(),

  model() {
    return this.get('store').findAll('calendar')
    .then((calendars) => {
      // calendars.reload();
      return Ember.RSVP.all(calendars.getEach('show')).then((shows) => {
        return shows, calendars;
      });
    });
  },

  actions: {
    goToConcert(concertId, regionName, regionId) {
      this.transitionTo('region.event.concert',
        regionName, regionId, concertId,
        { queryParams: {
          page: 1,
          min_date: '',
          max_date: ''
        }
      });
    },

    unTrackEvent(id) {
      this.get('store').findRecord('calendar', id, { backgroundReload: false }).then((calendar) => {
        calendar.destroyRecord()
        .then(() => {
          this.get('getUserCalendars').getCalendar();
        });
      });
    }
  }
});
