import DS from 'ember-data';

export default DS.Model.extend({
  displayName: DS.attr(),
  type: DS.attr(),
});

// venue: DS.attr(),
// performance: DS.attr(),
// start: DS.attr(),
// ageRestriction: DS.attr(),
// location: DS.attr(),
// displayName: DS.attr(),
