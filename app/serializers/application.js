import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({

  keyForAttribute: function(key) {
    return Ember.String.underscore(key);
  },

  serializeBelongsTo: function(record, json, relationship) {
    this._super(record, json, relationship);
    // console.log(record);
    // console.log(json);
    // console.log(relationship);
    let key = relationship.key;
    let json_key = this.keyForRelationship ? this.keyForRelationship(key, "belongsTo") : key;
    // console.log(json_key);
    let new_key = json_key + '_id';
    json[new_key] = json[json_key];
    json[new_key] = parseInt(json[new_key], 10);
    // console.log(record);
  },

  serializeHasMany: function(record, json, relationship) {
    this._super(record, json, relationship);
    let key = relationship.key;
    let json_key = this.keyForRelationship ? this.keyForRelationship(key, "hasMany") : key;
    console.log(json_key);
    if (json_key in json) {
      let new_key = json_key + '_id';
      json[new_key] = json[json_key];
      json[json_key] = json[json_key].map((item) => {
        // parseInt(json[json_key], 10);
        parseInt(item, 10);

      });
    }
  }
});
