import Ember from 'ember';

export default Ember.Route.extend({
  // accessArtistData: Ember.inject.service(),
  // beforeModel(transition) {
  //   if (transition.params['artist.search.results'].artist_name === null ||
  //       transition.params['artist.search.results'].artist_name === undefined ) {
  //       alert('Make sure all words are spelled correctly. Try different words. Try another artist, location, event, or venue.');
  //       transition.abort();
  //       }
  // },

  model (param) {
    return this.get('store').findRecord('artist-search', param.artist_name);
  },
});
