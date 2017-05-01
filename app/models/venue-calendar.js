import DS from 'ember-data';

export default DS.Model.extend({
  event: DS.attr(),
  noMatch: DS.attr(),
  meta: DS.attr()
});
