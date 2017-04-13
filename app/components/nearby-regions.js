import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['results-sidebar-wrapper nearby-regions'],

  uniqueLocations: Ember.computed.uniqBy('locations', 'id'),
  uniqueLoc: Ember.computed.filter('uniqueLocations', function(loc) {
    loc.set('state', loc.get('metroArea').state.displayName);
    loc.set('country', loc.get('metroArea').country.displayName);
    return parseInt(loc.id) !== this.get('currLoc');
  }),
  limited: Ember.computed('uniqueLoc', function() {
    return this.get('uniqueLoc').splice(0, 30);
  }),
  ordered: Ember.computed.sort('limited', 'sortAttrs'),
  sortAttrs: ['state'],

  // sortedEvents: Ember.computed.sort('uniqueArtists', 'sortAttrs'),
  // sortAttrs: ['popularity:desc'],
});
