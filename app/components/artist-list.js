import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['artist-event'],

  actions: {
    goToConcert(concert) {
      this.sendAction('goToConcert', concert);
    }
  }
});
