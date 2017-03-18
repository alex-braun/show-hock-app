import DS from 'ember-data';
import Ember from 'ember';
// SEARCH RESULTS BY ARTIST NAME.  MINIMUM ARTIST INFO IS CONTAINED
export default DS.Model.extend({
  artist: DS.attr(),
  // displayName: DS.attr(),
  // onTourUntil: DS.attr(),
  // imageUrl: DS.attr(),
  // noMatch: DS.attr(),
  meta: DS.attr(),

  isNotValid: Ember.computed.empty('name'),
});
