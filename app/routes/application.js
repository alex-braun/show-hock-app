import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    artistSearch(param) {
      if (!(param === null || param === undefined || param.match(/^ *$/) !== null)) {
        this.transitionTo('artist.search.results', param);
      }
    },

    regionSearch(param) {
      if (!(param === null || param === undefined || param.match(/^ *$/) !== null)) {
        this.transitionTo('region.search.results', param);
      }
    },

    venueSearch(param) {
      if (!(param === null || param === undefined || param.match(/^ *$/) !== null)) {
        this.transitionTo('venue.search.results', param);
      }
    },

    goToRegion(name, id) {
      this.transitionTo('region.event.results',
          name,
          id,
          { queryParams: {
            page: 1,
            }
      });
    },

    goToHome() {
      this.transitionTo('index');
    },

    userChooseRegion() {
      this.transitionTo('user.change-location');
    }
  },
});
