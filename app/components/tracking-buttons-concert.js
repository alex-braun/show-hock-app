import Ember from 'ember';

export default Ember.Component.extend({

  // tagName: 'li',
  // classNames: ['region-detail list-item'],

  userPicked: false,

  getUserCalendars: Ember.inject.service(),

  init() {
    this._super(...arguments);
    let userCalendar = this.get('getUserCalendars').userEventIdArr;
    if (userCalendar.includes(parseInt(this.get('model').id))) {
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
    }
  }
});
