import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    goToFullConcert(event) {
      this.sendAction('goToFullConcert', event);
    }
  }
});
