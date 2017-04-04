import Ember from 'ember';

export default Ember.Route.extend({

    queryParams: {
      page: {
        refreshModel: true
      },
    },

    model(params) {
      console.log(params);
      return this.get('store').findRecord('region', params.region_id, { adapterOptions: { page: params.page }
      })
      .then((result) => {
        let meta = result.get('meta');
        return meta, result;
      });
    }
});
