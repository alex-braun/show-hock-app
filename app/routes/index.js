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
                      per_page: 100,
                      min_date: '',
                      max_date: ''}
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
    goToRegion(name, id) {
      this.transitionTo('region.event.results',
          name,
          id,
          { queryParams: {
            page: 1,
            per_page: 50,
            min_date: '',
            max_date: ''
            }
      });
    },

    userChooseRegion() {
      this.transitionTo('user.change-location');
    },

    goToRegions() {
      this.transitionTo('region.search.index',
        { queryParams: {
          page: 1,
          min_date: '',
          max_date: ''
        }
      });
    },

    goToConcert(concertId, regionName, regionId) {
      this.transitionTo('region.event.concert',
        regionName, regionId, concertId,
        { queryParams: {
          page: 1,
          min_date: '',
          max_date: ''
        }
      });
    },

    goToArtists() {
      this.transitionTo('artist.search.index',
        { queryParams: {
          page: 1,
          min_date: '',
          max_date: ''
        }
      });
    },

    goToVenues() {
      this.transitionTo('venue.search.index');
    },
  }
});
