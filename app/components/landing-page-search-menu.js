import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['landing-page-search-menu'],

  actions: {
    goToArtists() {
      this.sendAction('goToArtists');
    },

    goToVenues() {
      this.sendAction('goToVenues');
    },

    goToRegions() {
      this.sendAction('goToRegions');
    }
  }
});
