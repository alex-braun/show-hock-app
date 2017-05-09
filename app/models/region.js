import DS from 'ember-data';
// DETAILS ON REGION EVENTS.
export default DS.Model.extend({
  event: DS.attr(),
  meta: DS.attr(),
  noMatch: DS.attr()
});
