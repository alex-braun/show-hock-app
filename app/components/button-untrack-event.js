import Ember from 'ember';

export default Ember.Component.extend({

classNames: ['button-untrack-event'],

  actions: {
    buttonClick(event) {
      this.sendAction('buttonClick', event);
    }
  }
});
