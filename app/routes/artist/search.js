import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    artistSearch(param) {
      if (!(param === null || param === undefined || param.match(/^ *$/) !== null)) {
        this.transitionTo('artist.search.results',
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
