import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveRegion(name, id) {
      console.log('action');
      this.sendAction('saveRegion', name, id);
    }
  },
});
