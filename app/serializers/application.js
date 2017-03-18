// import { ActiveModelSerializer } from 'active-model-adapter';
//
// export default ActiveModelSerializer.extend({
// });
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  // normalizeSaveResponse(store, primaryModelClass, payload, id, requestType) {
  //     let documentHash = this._super(store, primaryModelClass, payload, id, requestType);
  //
  //     if(typeof(payload.meta) !== 'object'){
  //       payload.meta = {};
  //     }
  //
  //     documentHash.data.attributes.meta = payload.meta;
  //
  //     return documentHash;

// }
///RESTSerializer allows Rails data to be sent back that is not explicitly defined
//as an attribute within Rails.  Songkick API data does not need to be completely
//reworked at this point.

    // primaryKey: 'id',
    // serializeId: function(id) {
    //     return id.toString();
    // }
});
