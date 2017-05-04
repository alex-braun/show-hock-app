import Ember from 'ember';

export default Ember.Route.extend({

accessArtistParams: Ember.inject.service(),

  actions: {
    back() {
      history.back();
      this.get('accessArtistParams').add(null);
    },

    searchAll(param) {
      if (!(param === null || param === undefined || param.match(/^ *$/) !== null)) {
        this.replaceWith('searches.search.results',
        param,
        { queryParams: {
            page: 1,
            per_page: 10
          }
        });
      }
    },
  }
});
