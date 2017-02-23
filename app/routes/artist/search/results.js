import Ember from 'ember';

export default Ember.Route.extend({
  accessArtistData: Ember.inject.service(),

  queryParams: {
    search: {
      refreshModel: true
    }
  },

  model (params) {
    return this.get('store').query('artist-search', params);
  },
});
