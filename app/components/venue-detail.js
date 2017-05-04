import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'li',
  classNames: ['region-detail list-item'],

  userPicked: false,

  getUserCalendars: Ember.inject.service(),

  init() {
    this._super(...arguments);
    let userCalendar = this.get('getUserCalendars').userEventIdArr;
    if (userCalendar.includes(this.get('event').id)) {
      return this.set('userPicked', true);
    } else {
      return this.set('userPicked', false);
    }
  },

  actions: {
    goToConcert(concert) {
      this.sendAction('goToConcert', concert);
    },

    trackEvent(event) {
      this.set('userPicked', true);
      this.sendAction('trackEvent', event);
    },

    unTrackEvent(event) {
      this.set('userPicked', false);
      this.sendAction('unTrackEvent', event);
    },

    goToAuthenticate(event) {
      this.sendAction('goToAuthenticate', event);
    }
  }
});
