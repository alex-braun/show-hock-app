import Ember from 'ember';

export default Ember.Route.extend({
  // accessArtistData: Ember.inject.service(),

  model (param) {
    return this.get('store').findRecord('artist-search', param.artist_name);
  },
});
