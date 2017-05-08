import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['upcoming-events-wrapper'],
  userLocationSetting: Ember.inject.service(),
  buttonTitle: 'Details',

  actions: {
   goToConcert(value) {
     this.sendAction('goToConcert', value);
   },

   trackUpcomingEvent(event) {
     this.sendAction('trackUpcomingEvent', event);
   },

   unTrackUpcomingEvent(event) {
     this.sendAction('unTrackUpcomingEvent', event);
   },

   goToAuthenticate(event) {
     this.sendAction('goToAuthenticate', event);
   }
 }
});
