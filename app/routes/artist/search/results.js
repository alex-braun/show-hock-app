import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    page: {
      refreshModel: true
    },
    per_page: {
      refreshModel: true
    },
  },

  model (params) {
    return this.get('store').findRecord('artist-search', params.artist_name, {
      adapterOptions: { page: params.page,
                        per_page: params.per_page }

    })
    .then((result) => {
      let meta = result.get('meta');
      return meta, result;
    });
  }
});
