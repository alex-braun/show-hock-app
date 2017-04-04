import Ember from 'ember';

export default Ember.Route.extend({

  geoLocation: Ember.inject.service(),
  accessArtistName: Ember.inject.service(),
  count: Ember.inject.service('access-artist-show-count'),
  artistEventParams: null,

  queryParams: {
    page: {
      refreshModel: true
    },
  },

  beforeModel(param) {
    this._super(...arguments);
    this.get('accessArtistName').add(param.params['artist.event']);
    this.set('artistEventParams', param.params['artist.event']);
    let getGeo;
    let ip = this.get('geoLocation').clientIp;
    if (ip === null || ip === undefined) {
      getGeo = this.get('geoLocation').getIp();
    }
    return getGeo;
  },

  model (params) {
    console.log('artist route');
    let allParams = {
      location: this.get('geoLocation').clientIp,
      artistName: this.get('artistEventParams').artist_name,
      artistId: this.get('artistEventParams').artist_id
    };

    return Ember.RSVP.hash({

      artist: this.get('store').findRecord('artist', allParams.artistId, {
        adapterOptions: { page: params.page }
      })
      .then((result) => {
        let meta = result.get('meta');
        return meta, result;
      }),

      upcomingInfo: this.get('store').query('upcoming-event', {
        location: allParams.location,
        artist: allParams.artistName
      })
      .then((result) => {
        return result;
      }),
    });
},

  afterModel(model) {
    let meta = model.artist.get('meta');
    this.get('count').add(meta.total_entries);
  },

  actions: {
    // changeRoute(val) {
    //   this.transitionTo('artist.event.concert', val);
    // },

    goToConcert(value) {
      this.transitionTo('artist.event.concert', value);
    }
  }
});
