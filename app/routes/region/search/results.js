import Ember from 'ember';

export default Ember.Route.extend({
    // queryParams: {
    //   search: {
    //     refreshModel: true
    //   }
    // },

    model (params) {
      return this.get('store').findRecord('region-search', params.region_name);
      // return this.get('store').query('region-search', params);
    },
  });
