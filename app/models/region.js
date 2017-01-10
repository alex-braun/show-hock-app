import DS from 'ember-data';

export default DS.Model.extend({
  displayName: DS.attr(),
  start: DS.attr(),
  location: DS.attr(),
  performance: DS.attr(),
  venue: DS.attr(),

});
