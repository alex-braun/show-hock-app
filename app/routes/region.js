import Ember from 'ember';

export default Ember.Route.extend({

    queryParams: {
      getId: {
        refreshModel: true
      },
      page: {
        refreshModel: true
      }
    },

    model(params) {
      console.log(params);
      return this.get('store').query('region', params);
      // .then((result) => {
      //   let meta = result.get('meta');
      // });
    }

    // actions: {
    //   getRegionPage(params) {
    //   return this.get('store').query('region', params);
    //   }
    // }

    // model () {
    //   return artists;
    // }
});
