import Ember from 'ember';

export default Ember.Route.extend({

accessArtistParams: Ember.inject.service(),

queryParams: {
  page: {
    refreshModel: true
  },
  per_page: {
    refreshModel: true
  },
},

beforeModel(data) {
  return this.get('accessArtistParams').add(data.params['searches.search.results'].search_name);
  // let id = data.params['search.results'].search_name;
  // console.log(data);
},

// model(param) {
//   return Ember.RSVP.hash({
//
//     artist: this.get('store').findRecord('artist-search', param.search_name)
//     .then((result) => {
//       let meta = result.get('meta');
//       return meta, result;
//     }),
//
//     region: this.get('store').findRecord('region-search', param.search_name)
//     .then((result) => {
//       let meta = result.get('meta');
//       return meta, result;
//     }),
//
//     venue: this.get('store').findRecord('venue-search', param.search_name)
//     .then((result) => {
//       let meta = result.get('meta');
//       return meta, result;
//     }),
//   });
// }


model(params) {
  return Ember.RSVP.hash({

    artist: this.get('store').findRecord('artist-search', params.search_name, {
      adapterOptions: { page: params.page,
                        per_page: params.per_page }

    })
    .then((result) => {
      let meta = result.get('meta');
      return meta, result;
    }),

    region: this.get('store').findRecord('region-search', params.search_name , {
      adapterOptions: { page: params.page,
                        per_page: params.per_page }
    })
    .then((result) => {
      let meta = result.get('meta');
      return meta, result;
    }),

    venue: this.get('store').findRecord('venue-search', params.search_name, {
      adapterOptions: { page: params.page,
                      per_page: params.per_page }
      })
    .then((result) => {
      let meta = result.get('meta');
      return meta, result;
    }),
  });
},

actions: {
  artistSearch(param) {
      this.transitionTo('artist.search.results',
        param,
        { queryParams: {
            page: 1,
            per_page: 50
          }
        });
  },

  venueSearch(param) {
      this.transitionTo('venue.search.results',
        param,
        { queryParams: {
            page: 1,
            per_page: 50
          }
        });
  },

  regionSearch(param) {
    this.transitionTo('region.search.results',
        param,
        { queryParams: {
            page: 1,
            per_page: 50
          }
        });
  },

  goToArtist(name, id) {
    console.log('hello?');
    this.transitionTo('artist.event.results',
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

  goToRegion(name, id) {
    this.transitionTo('region.event.results',
      name,
      id,
      { queryParams: {
          page: 1,
          per_page: 50
        }
      });
  }
}

});
