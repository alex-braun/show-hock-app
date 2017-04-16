import Ember from 'ember';

export default Ember.Component.extend({

  // uniqueLocations: Ember.computed.uniqBy('locations', 'id'),
//   uniqueLoc: Ember.computed.filter('uniqueLocations', function(loc) {
//     if (loc.get('metroArea').country.displayName === 'US') {
//       loc.set('state', loc.get('metroArea').state.displayName);
//     } else {
//       loc.set('state', 'noState');
//     }
//     loc.set('country', loc.get('metroArea').country.displayName);
//     return parseInt(loc.id) !== this.get('currLoc');
//   }),
//   limited: Ember.computed('uniqueLoc', function() {
//     return this.get('uniqueLoc').splice(0, 30);
//   }),
//   ordered: Ember.computed.sort('limited', 'sortAttrs'),
//   sortAttrs: ['state'],
// });

merged: Ember.computed.union('artists', 'regions', 'venues'),

  // mergeModels() {
  //   let artists = this.get('artists');
  // }
});
