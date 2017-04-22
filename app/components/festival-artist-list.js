import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['festival-artist-list'],

  actions: {
    goToConcert(concertId) {
      this.sendAction('goToConcert', concertId);
    }
  }
});
