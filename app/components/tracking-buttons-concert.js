import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['button-track-event-wrapper'],

  getUserCalendars: Ember.inject.service(),

  init() {
    this._super(...arguments);
    let userCalendarEventIds = this.get('getUserCalendars').userCalendarEventIds;
    if (userCalendarEventIds.includes(parseInt(this.get('model').id))) {
      return this.set('userPicked', true);
    } else {
      return this.set('userPicked', false);
    }
  },

  actions: {
    trackEvent(event) {
      this.sendAction('trackEvent', event);
      this.set('userPicked', true);
    },

    unTrackEvent(event) {
      this.sendAction('unTrackEvent', event);
      this.set('userPicked', false);
    },

    goToAuthenticate(event) {
      this.sendAction('goToAuthenticate', event);
    }
  }
});
