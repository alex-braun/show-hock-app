import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
////CONVERT CAMELCASE TO SNAKE
  keyForAttribute: function(key) {
    return Ember.String.underscore(key);
  },

///CONVERT Ember Data belongsTo `model: "id"` to `model_id: id`
  serializeBelongsTo: function(record, json, relationship) {
    this._super(record, json, relationship);
    let key = relationship.key;
    let json_key = this.keyForRelationship ? this.keyForRelationship(key, "belongsTo") : key;
    // console.log(json_key);
    let new_key = json_key + '_id';
    json[new_key] = json[json_key];
    json[new_key] = parseInt(json[new_key], 10);
  },

///CONVERT Ember Data hasMany `model: "id"` to `model_id: id`
  serializeHasMany: function(record, json, relationship) {
    this._super(record, json, relationship);
    let key = relationship.key;
    let json_key = this.keyForRelationship ? this.keyForRelationship(key, "hasMany") : key;
    if (json_key in json) {
      let new_key = json_key + '_id';
      json[new_key] = json[json_key];
      json[json_key] = json[json_key].map((item) => {
        parseInt(item, 10);

      });
    }
  }
});
