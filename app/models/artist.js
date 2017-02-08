import DS from 'ember-data';

export default DS.Model.extend({
  displayName: DS.attr(),
  type: DS.attr(),
  location: DS.attr(),
  performance: DS.attr(),
  start: DS.attr(),
  end: DS.attr(),
  venue: DS.attr(),
  noMatch: DS.attr(),
  similar: DS.hasMany('similar-artist', { async: true })
});
