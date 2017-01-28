import DS from 'ember-data';

export default DS.Model.extend({
  displayName: DS.attr(),
  type: DS.attr(),
  imageUrl: DS.attr(),
  start: DS.attr(),
  end: DS.attr(),
  location: DS.attr(),
  performance: DS.attr(),
  venue: DS.attr(),

});
