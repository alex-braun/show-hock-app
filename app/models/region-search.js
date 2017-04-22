import DS from 'ember-data';
// SEARCH RESULTS BY REGION NAME.  MINIMUM REGION INFO IS CONTAINED
export default DS.Model.extend({
  location: DS.attr(),
  meta: DS.attr(),
  noMatch: DS.attr()
});
