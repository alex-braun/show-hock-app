import Ember from 'ember';

export default Ember.Route.extend({

  getUserCalendars: Ember.inject.service(),

  // beforeModel() {
  //   this.get('getUserCalendars').getCalendar();
  // },
  model() {
    return this.get('store').findAll('calendar');
  }
});
