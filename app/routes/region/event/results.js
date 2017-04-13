import Ember from 'ember';

export default Ember.Route.extend({

    regionId: null,

    queryParams: {
      page: {
        refreshModel: true
      },
    },

    beforeModel(data) {
      this._super(...arguments);
      let id = parseInt(data.params['region.event'].region_id);
      this.set('regionId', id);
          // name = data.params['region.event'].region_name;

      // this.get('nameAndId').addId(id);
      // this.get('nameAndId').addName(name);
    },

    model(params) {
      let id = this.get('regionId');

      return this.get('store').findRecord('region', id, {
      adapterOptions: { page: params.page,
                        per_page: 50 }
      })
      .then((result) => {
        let meta = result.get('meta');
        return meta, result;
      });
    }
});
