import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    getId: {
      refreshModel: true
    }
  },

  model (params) {
    console.log(params);
    return this.get('store').query('artist', params);
    // return this.get('store').findRecord('artist', params.id);
  }
  // model () {
  //   return artists;
  // }
});
