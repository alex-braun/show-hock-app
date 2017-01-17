import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
      search: {
        refreshModel: true
      }
    },

    model (params) {
      return this.get('store').query('region-search', params);
    },
  });


  // model(params) {
  //   // console.log(params);
  //   return this.get('store').query('region', params)
  //   .then((result) => {
  //     let meta = result.get('meta');
  //     // console.log(meta);
  //     return meta, result;
  //   });
  // }
