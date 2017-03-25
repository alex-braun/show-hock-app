import DS from 'ember-data';
// DETAILS ON REGION EVENTS.
export default DS.Model.extend({
  event: DS.attr(),
  // displayName: DS.attr(),
  // type: DS.attr(),
  // imageUrl: DS.attr(),
  // start: DS.attr(),
  // end: DS.attr(),
  // location: DS.attr(),
  // performance: DS.attr(),
  // venue: DS.attr(),
  meta: DS.attr(),
  noMatch: DS.attr(),
});
