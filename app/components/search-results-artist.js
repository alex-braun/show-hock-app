import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['search-results artists'],

  actions: {
    goToArtist(name, id) {
      this.sendAction('goToArtist', name, id);
    }
  }
});
