import Ember from 'ember';

export default Ember.Route.extend({

  getUserCalendars: Ember.inject.service(),

  // beforeModel() {
  //   this.get('getUserCalendars').getCalendar();
  // },
  model() {
    return this.get('store').findAll('calendar');
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
    }
  }
});
