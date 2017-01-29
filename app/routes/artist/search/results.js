import Ember from 'ember';

export default Ember.Route.extend({
//ka-bob to camelCase!
  queryParams: {
    search: {
      refreshModel: true
    }
  },

  model (params) {
    return this.get('store').query('artist-search', params);
  },
});
