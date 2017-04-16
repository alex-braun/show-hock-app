import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['search-results regions'],

  actions: {
    goToRegion(name, id) {
      this.sendAction('goToRegion', name, id);
    }
  }
});
