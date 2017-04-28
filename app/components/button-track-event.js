import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    buttonClick(id) {
      this.sendAction('buttonClick', id);
    }
  }
});
