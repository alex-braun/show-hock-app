import Ember from 'ember';

export default Ember.Route.extend({

    regionId: null,

    queryParams: {
      page: {
        refreshModel: true
      },
      min_date: {
        refreshModel: true
      },
      max_date: {
        refreshModel: true
      }
    },

    beforeModel(data) {
      this._super(...arguments);
      let id = parseInt(data.params['region.event'].region_id);
      this.set('regionId', id);
    },

    model(params) {
      let id = this.get('regionId');

      return this.get('store').findRecord('region', id, {
      adapterOptions: { page: params.page,
                        per_page: 50,
                        min_date: params.min_date,
                        max_date: params.max_date }
      })
      .then((result) => {
        let meta = result.get('meta');
        return meta, result;
      });
    },

    actions: {
      goToConcert(concertId) {
        this.transitionTo('region.event.concert', concertId, {
          queryParams: {
            page: 1
          }
        });
      }
    }
});
