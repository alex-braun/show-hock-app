import ApplicationAdapter from './application';

import Ember from 'ember';

export default ApplicationAdapter.extend({
  findRecord: function(store, type, id, snapshot) {
    if (Ember.get(snapshot.adapterOptions, 'page')) {
      let url = this.buildURL(type.modelName, id, snapshot, 'findRecord');
      let query = {
        page: Ember.get(snapshot.adapterOptions, 'page'),
        min_date: Ember.get(snapshot.adapterOptions, 'min_date'),
        max_date: Ember.get(snapshot.adapterOptions, 'max_date'),
        per_page: Ember.get(snapshot.adapterOptions, 'per_page')
      };
      return this.ajax(url, 'GET', { data: query });
    } else {
      this._super(...arguments);
    }
  }
});
