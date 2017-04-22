import DS from 'ember-data';
// MINIMUM INFORMATION ON SIMILAR ARTISTS.  USED TO LINK TO THOSE ARTISTS.
export default DS.Model.extend({
  artist: DS.attr(),
  meta: DS.attr(),
  noMatch: DS.attr(),
});
