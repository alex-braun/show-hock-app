import DS from 'ember-data';
// DETAILS ON ARTIST EVENTS AND TOUR INFORMATION
export default DS.Model.extend({
  event: DS.attr(),
  meta: DS.attr(),
  // displayName: DS.attr(),
  // type: DS.attr(),
  // location: DS.attr(),
  // performance: DS.attr(),
  // start: DS.attr(),
  // end: DS.attr(),
  // venue: DS.attr(),
  noMatch: DS.attr(),
  // uri: DS.attr(),
});
