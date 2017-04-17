import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['artist-event'],

  actions: {
    goToConcert(concertId) {
      this.sendAction('goToConcert', concertId);
    }
  }
});
