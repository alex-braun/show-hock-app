import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  displayName: DS.attr(),
  start: DS.attr(),
  end: DS.attr(),
  uri: DS.attr(),
  performance: DS.attr(),
  venue: DS.attr(),
  location: DS.attr(),
  popularity: DS.attr(),
  imageUrl: DS.attr()
});
