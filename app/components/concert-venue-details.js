import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['concert-venue-details'],

  actions: {
    goToVenue(id) {
      this.sendAction('goToVenue', id);
    }
  }
});
