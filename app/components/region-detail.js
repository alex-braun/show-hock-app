import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['region-detail list-item'],

  actions: {
    goToConcert(concertId) {
      this.sendAction('goToConcert', concertId);
    }
  }
});
