import Ember from 'ember';

export default Ember.Route.extend({

  saveUserLocation: Ember.inject.service(),

  queryParams: {
    page: {
      refreshModel: true
    },
    per_page: {
      refreshModel: true
    },
  },

  model (params) {
    return this.get('store').findRecord('region-search', params.region_name, {
      adapterOptions: { page: params.page,
                        per_page: params.per_page }
    })
    .then((result) => {
      let meta = result.get('meta');
      return meta, result;
    });
  },

  actions: {

    saveRegion(region, id) {
      this.get('saveUserLocation').saveRegionSelect(region, id);
      this.transitionTo('/');
    }
  },
});
