import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['button-to-concert-wrapper'],

  actions: {
    buttonClick(value) {
      this.sendAction('buttonClick', value);
    }
  }
});
