import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['results-sidebar-wrapper artist nearby-regions'],

  actions: {
    goToArtist(name, id) {
      this.sendAction('goToArtist', name, id);
    }
  }
});
