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
    saveRegion(id, regObj) {
      if (regObj.hasOwnProperty('state')) {
        this.get('saveUserLocation').saveRegionSelect(regObj.displayName, id, regObj.country.displayName, regObj.state.displayName);
      } else {
        this.get('saveUserLocation').saveRegionSelect(regObj.displayName, id, regObj.country.displayName, false);
      }
      this.transitionTo('/');
    }
  },
});
