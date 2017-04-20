import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    venueSearch(param) {
      console.log(param);
      if (!(param === null || param === undefined || param.match(/^ *$/) !== null)) {
        this.transitionTo('venue.search.results',
        param,
        { queryParams: {
          page: 1,
          per_page: 50
        }
      });
      }
    },
  }
});
