import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['region-detail list-item'],
  buttonTitle: 'Details',

  // getUserCalendars: Ember.inject.service(),

  // init() {
  //   this._super(...arguments);
  //   let userCalendarEventIds = this.get('getUserCalendars').userCalendarEventIds;
  //   if (userCalendarEventIds.includes(this.get('event').id)) {
  //     return this.set('userPicked', true);
  //   } else {
  //     return this.set('userPicked', false);
  //   }
  // },

  actions: {
   goToConcert(value) {
     this.sendAction('goToConcert', value);
   },

   trackEvent(event) {
     this.sendAction('trackEvent', event);
   },

   unTrackEvent(event) {
     this.sendAction('unTrackEvent', event);
   },

   goToAuthenticate(event) {
     this.sendAction('goToAuthenticate', event);
   },

   trackBtnsUpdated() {
   }
 }
});
