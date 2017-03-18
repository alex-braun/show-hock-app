import Ember from 'ember';

export default Ember.Route.extend({

  geoLocation: Ember.inject.service(),
  // accessArtistData: Ember.inject.service(),
  // accessArtistId: Ember.inject.service(),
  count: Ember.inject.service('access-artist-show-count'),
  artistName: null,

  queryParams: {
    page: {
      refreshModel: true
    },
  },
  beforeModel(param) {
    this._super(...arguments);
    // this.get('accessArtistId').add(param.params['artist.event.results']);
    this.set('artistName', param.params['artist.event']);
    let getGeo;
    let ip = this.get('geoLocation').clientIp;
    if (ip === null || ip === undefined) {
      getGeo = this.get('geoLocation').getIp();
    }
    return getGeo;
  },

  model (params) {
    let upcomingParamObj = {
      location: this.get('geoLocation').clientIp,
      artist: this.get('artistName').artist_name,
    };

    return Ember.RSVP.hash({

      artist: this.get('store').findRecord('artist', params.artist_id, {
        adapterOptions: { page: params.page }
      })
      .then((result) => {
        let meta = result.get('meta');
        return meta, result;
      }),

      upcomingInfo: this.get('store').query('upcoming-event', upcomingParamObj)
      .then((result) => {
        return result;
      }),
    });
},

  afterModel(model) {
    let meta = model.artist.get('meta');
    this.get('count').add(meta.total_entries);
  }
});
