import DS from 'ember-data';
// MINIMUM INFORMATION ON SIMILAR ARTISTS.  USED TO LINK TO THOSE ARTISTS.
export default DS.Model.extend({
  displayName: DS.attr(),
  onTourUntil: DS.attr(),
  imageUrl: DS.attr(),
  noMatch: DS.attr(),
});
