import Ember from 'ember';

export default Ember.Component.extend({

  buttonTitle: 'Details',

  actions: {
    goToConcert(concert) {
      this.sendAction('goToConcert', concert);
    }
  }
});
