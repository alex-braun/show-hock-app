import Ember from 'ember';

export default Ember.Route.extend({

  accessChildData: Ember.inject.service(),

  queryParams: {
    getId: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    },
    artist: {
      refreshModel: true
    }
  },

  model (params) {
    return this.get('store').query('artist', params)
    .then((result) => {
      let meta = result.get('meta');
      return meta, result;
    });
  },

  afterModel (model) {
    let meta = model.get('meta');
    this.get('accessChildData').add(meta);
  }
});
