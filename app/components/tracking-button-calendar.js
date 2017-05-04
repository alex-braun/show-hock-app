import Ember from 'ember';

export default Ember.Component.extend({

classNames: ['tracking-button-calendar'],

  actions: {
    buttonClick(event) {
      this.sendAction('buttonClick', event);
    }
  }
});
