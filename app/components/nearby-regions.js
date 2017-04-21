import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['results-sidebar-wrapper nearby-regions'],

  uniqueLocations: Ember.computed.uniqBy('locations', 'id'),
  uniqueLoc: Ember.computed.filter('uniqueLocations', function(loc) {
    if (loc.get('metroArea').country.displayName === 'US') {
      loc.set('state', loc.get('metroArea').state.displayName);
    } else {
      loc.set('state', 'noState');
    }
    loc.set('country', loc.get('metroArea').country.displayName);
    return parseInt(loc.id) !== this.get('currLoc');
  }),
  limited: Ember.computed('uniqueLoc', function() {
    let num;
    if (this.get('uniqueLoc').length > 30) {
      num = 30;
    } else {
      num = this.get('uniqueLoc').length;
    }
    return this.get('uniqueLoc').splice(0, num);
  }),
  ordered: Ember.computed.sort('limited', 'sortAttrs'),
  sortAttrs: ['state'],

  actions: {
    goToRegion(region, id) {
      this.sendAction('goToRegion', region, id);
    }
  }
});
