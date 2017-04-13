import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveRegion(name, id) {
      this.sendAction('saveRegion', name, id);
    }
  },
});
