import DS from 'ember-data';

export default DS.RESTSerializer.extend({
///RESTSerializer allows Rails data to be sent back that is not explicitly defined
//as an attribute within Rails.  Songkick API data does not need to be completely
//reworked at this point.

    // primaryKey: 'id',
    // serializeId: function(id) {
    //     return id.toString();
    // }
});
