import DS from 'ember-data';
// DETAILS ON ARTIST EVENTS AND TOUR INFORMATION
export default DS.Model.extend({
  event: DS.attr(),
  meta: DS.attr(),
  noMatch: DS.attr(),
});
