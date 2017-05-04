import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['region-search list-item'],

  actions: {
    goToConcert(concertId, regionName, regionId) {
      this.sendAction('goToConcert', concertId, regionName, regionId);
    },

    unTrackEvent(calendarId) {
      this.sendAction('unTrackEvent', calendarId);
    }
  }
});
