import Ember from 'ember';

export default Ember.Route.extend({

  userLocationSetting: Ember.inject.service(),

  beforeModel() {
    this._super(...arguments);
    return this.get('userLocationSetting').getRegion().then(() => {
      return this.set('regionName',this.get('userLocationSetting').regionName),
      this.set('regionId', this.get('userLocationSetting').regionId);
    });
  },

  model() {

    let id = this.get('userLocationSetting').regionId;
    return this.get('store').findRecord('region', id, {
      adapterOptions: { page: 1,
                        per_page: 100,
                        min_date: '',
                        max_date: ''}
    })
      .then((result) => {
      let meta = result.get('meta');
      return meta, result;
    });
  },

  actions: {
    goToFullConcert(event) {
      ////if `unknown venue, the concert is routed to region concerts instead of venue concerts`////
      if (!event.venue.id) {
        this.transitionTo('region.event.concert', event.venue.metroArea.displayName, event.venue.metroArea.id, event.id);
      } else {
      this.transitionTo('venue.event.concert', event.venue.id, event.id);
      }
    }
  }
});
