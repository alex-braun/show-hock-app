import Ember from 'ember';

export default Ember.Route.extend({

    queryParams: {
      getId: {
        refreshModel: true
      },
      page: {
        refreshModel: true
      },
      location: {
        refreshModel: true
      }
    },

    model(params) {
      return this.get('store').query('region', params)
      .then((result) => {
        let meta = result.get('meta');
        return meta, result;
      });
    }
});
