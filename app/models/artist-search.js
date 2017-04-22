import DS from 'ember-data';
// SEARCH RESULTS BY ARTIST NAME.  MINIMUM ARTIST INFO IS CONTAINED
export default DS.Model.extend({
  artist: DS.attr(),
  meta: DS.attr(),
});
