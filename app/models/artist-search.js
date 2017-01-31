import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  displayName: DS.attr(),
  onTourUntil: DS.attr(),
  noMatch: DS.attr(),

  isNotValid: Ember.computed.empty('name'),
});
// resultsPage": {
// "status": "ok",
// "results": {},
// "perPage": 50,
// "page": 1,
// "totalEntries": 0
