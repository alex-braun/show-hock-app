import Ember from 'ember';

export default Ember.Route.extend({

  // accessArtistData: Ember.inject.service(),
  //
  queryParams: {
    concertId: {
      refreshModel: true
    },
  },
  //
  model (params) {
    return this.get('store').query('concert', params);
  },
});
