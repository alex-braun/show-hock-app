import ActiveModelAdapter from 'active-model-adapter';

import ENV from 'show-hock-app/config/environment';

export default ActiveModelAdapter.extend({
  host: ENV.apiHost,
});



// export default JSONAPIAdapter.extend({
//   findRecord: function(store, type, id, snapshot) {
//     if (Em.get(snapshot, 'include')) {
//       let url = this.buildURL(type.modelName, id, snapshot, 'findRecord');
//       let query = this.buildQuery(snapshot);
//       return this.ajax(url, 'GET', { data: query });
//     } else {
//       this._super(...arguments);
//     }
// });
