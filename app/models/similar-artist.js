import DS from 'ember-data';

export default DS.Model.extend({
  displayName: DS.attr(),
  onTourUntil: DS.attr(),
  imageUrl: DS.attr(),
  noMatch: DS.attr(),
});
