import Ember from 'ember';

export default Ember.Route.extend({
  // accessArtistData: Ember.inject.service(),
  // beforeModel(transition) {
  //   if (transition.params['artist.search.results'].artist_name === null ||
  //       transition.params['artist.search.results'].artist_name === undefined ) {
  //       alert('Make sure all words are spelled correctly. Try different words. Try another artist, location, event, or venue.');
  //       transition.abort();
  //       }
  // },

  queryParams: {
    page: {
      refreshModel: true
    },
    per_page: {
      refreshModel: true
    },
  },

  model (params) {
    return this.get('store').findRecord('artist-search', params.artist_name, {
      adapterOptions: { page: params.page,
                        per_page: params.per_page }

    })
    .then((result) => {
      let meta = result.get('meta');
      return meta, result;
    });
  }
});
