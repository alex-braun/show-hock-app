import DS from 'ember-data';

export default DS.Model.extend({
  event: DS.attr(),
  noEvents: DS.attr(),
  meta: DS.attr()
});
