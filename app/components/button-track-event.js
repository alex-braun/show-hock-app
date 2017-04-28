import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    buttonClick(event) {
      this.sendAction('buttonClick', event);
    }
  }
});
