import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['similar-artists-wrapper'],

  actions: {
    goToArtist(name, id) {
      this.sendAction('goToArtist', name, id);
    }
  }

  //
  //
  // others: Ember.computed('model.similar.length', function() {
  //   console.log(this.get('model.similar-artist.length'));
  //   return this.get('model.similar.length');
  // })
});
//next button
