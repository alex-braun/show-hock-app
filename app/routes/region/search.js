import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    regionSearch(param) {
      if (!(param === null || param === undefined || param.match(/^ *$/) !== null)) {
        this.transitionTo('region.search.results',
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
