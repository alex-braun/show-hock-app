import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    allSearch(param) {
      if (!(param === null || param === undefined || param.match(/^ *$/) !== null)) {
        this.transitionTo('searches.search.results',
        param,
        { queryParams: {
            page: 1,
            per_page: 10
          }
        });
      }
    },

    goToRegion(name, id) {
      this.transitionTo('region.event.results',
          name,
          id,
          { queryParams: {
            page: 1,
            per_page: 50
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
