import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['search-results venues'],

  actions: {
    goToVenue(id) {
      this.sendAction('goToVenue', id);
    }
  }
});
