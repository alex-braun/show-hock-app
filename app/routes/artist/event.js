// import Ember from 'ember';
//
// export default Ember.Route.extend({
//
//   accessArtistParams: Ember.inject.service(),
//   // params: null,
//   queryParams: {
//
//     getId: {
//       as: 'other-getId',
//       refreshModel: true
//     },
//
//     artist: {
//       as: 'other-artist',
//       refreshModel: true
//     }
//   },
//
//   model(params) {
//     return Ember.RSVP.hash({
//
//     event: this.get('store').query('artist', params).then((result) => {
//         let meta = result.get('meta');
//         return meta, result;
//       }),
//
//     search: this.get('store').query('artist-search', {search: params.artist})
//     .then((result) => {
//       let meta = result.get('meta');
//       return meta, result;
//     });
//     },
// });


import Ember from 'ember';

export default Ember.Route.extend({

  accessArtistParams: Ember.inject.service(),
  accessArtistData: Ember.inject.service(),
  upcomingEventArtist: Ember.inject.service(),
  geoLocation: Ember.inject.service(),
  clientIp: null,

  queryParams: {
    getId: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    },
    artist: {
      refreshModel: true
    },
    // location: {
    //   refreshModel: true
    // }
  },

  beforeModel() {
    this._super(...arguments);
    return this.get('geoLocation').getIp();
  },

  model (params) {
    let location = this.get('location').clientIp;
    let artist = params.artist;
    return Ember.RSVP.hash({

      search: this.get('store').query('artist-search', {search: params.artist})
      .then((result) => {
        let meta = result.get('meta');
        return meta, result;
      }),

      event: this.get('store').query('artist', params).then((result) => {
        let meta = result.get('meta');
        return meta, result;
      }),

      similar: this.get('store').query('similar-artist', params).then((result) => {
        let arr = [];
        for (let i = 0; i < 10; i++) {
          arr.push([i]);
        }
           let selection = result.objectsAt(arr);
           selection = selection.filter((element) => {
             return element !== undefined;
           });
           return selection;
      }),

      upcomingInfo: this.get('store').query('upcoming-event', {location: location, artist: artist})
      .then((result) => {
        return result;
      }),
    });
  },

  afterModel (model) {
    let meta = model.event.get('meta');
    this.get('upcomingEventArtist').add(model.event.query);
    this.get('accessArtistData').add(meta);
  },
});
