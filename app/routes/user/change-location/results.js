import Ember from 'ember';

export default Ember.Route.extend({

  saveUserLocation: Ember.inject.service(),

  model (params) {
    return this.get('store').findRecord('region-search', params.region_name);
  },

  actions: {

    saveRegion(region, id) {
      this.get('saveUserLocation').saveRegionSelect(region, id);
      this.transitionTo('/');
    }
  },
});
