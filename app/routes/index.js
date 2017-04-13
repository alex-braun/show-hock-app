import Ember from 'ember';

export default Ember.Route.extend({

  regionName: null,
  regionId: null,
  randArray: null,
  userLocationSetting: Ember.inject.service(),
  geoLocation: Ember.inject.service(),


  beforeModel() {
    this._super(...arguments);
    return this.get('userLocationSetting').getRegion().then(() => {
      return this.set('regionName',this.get('userLocationSetting').regionName),
      this.set('regionId', this.get('userLocationSetting').regionId);
    });
  },


  model() {
    let regionId = this.get('regionId');
    return this.get('store').findRecord('region', regionId, { adapterOptions: { page: 1,
                      per_page: 100 }
    })
    .then((result) => {
      let meta = result.get('meta');
      return meta, result;
    });
  },

  setupController(controller, model) {
    controller.set('model', model);
  },

  actions: {
    getRegionShows(val) {
      this.transitionTo('region.event.results', val);
    },

    userChooseRegion() {
      this.transitionTo('user.change-location');
    },

    goToRegions() {
      this.transitionTo('region.search');
    },

    goToArtists() {
      this.transitionTo('artist.search.popular',
        { queryParams: {
          page: 1,
        }
      });
    },

    goToVenues() {
      this.transitionTo('venue.search');
    }
  }
});
