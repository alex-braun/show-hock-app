import DS from 'ember-data';

export default DS.Model.extend({
  metroArea: DS.attr(),
  noMatch: DS.attr()
});
