import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  displayName: DS.attr(),
  performance: DS.attr(),
  venue: DS.attr(),
  uri: DS.attr(),
  location: DS.attr(),
  start: DS.attr(),
  noMatch: DS.attr(),
  popularity: DS.attr()
});
