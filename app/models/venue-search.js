import DS from 'ember-data';

export default DS.Model.extend({
  venue: DS.attr(),
  meta: DS.attr(),
  // metroArea: DS.attr(),
  noMatch: DS.attr()
});
