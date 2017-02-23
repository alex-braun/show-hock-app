import DS from 'ember-data';
import Ember from 'ember';
// SEARCH RESULTS BY ARTIST NAME.  MINIMUM ARTIST INFO IS CONTAINED
export default DS.Model.extend({
  displayName: DS.attr(),
  onTourUntil: DS.attr(),
  imageUrl: DS.attr(),
  noMatch: DS.attr(),

  isNotValid: Ember.computed.empty('name'),
});
