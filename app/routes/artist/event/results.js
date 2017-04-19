import Ember from 'ember';

export default Ember.Route.extend({

  // geoLocation: Ember.inject.service(),
  userLocationSetting: Ember.inject.service(),
  // dateFilterParams: Ember.inject.service(),
  accessArtistName: Ember.inject.service(),
  count: Ember.inject.service('access-artist-show-count'),
  artistEventParams: null,

  queryParams: {
    page: {
      refreshModel: true
    },
    min_date: {
      refreshModel: true
    },
    max_date: {
      refreshModel: true
    }
  },
  //
  // min_date (YYYY-MM-DD)
  // max_date (YYYY-MM-DD)
  //
  beforeModel(param) {
    this._super(...arguments);
    this.get('accessArtistName').add(param.params['artist.event']);
    this.set('artistEventParams', param.params['artist.event']);

    // this.get('userLocationSetting').getRegion();

    return this.get('userLocationSetting').getRegion().then(() => {
      return this.set('regionName',this.get('userLocationSetting').regionName),
      this.set('regionId', this.get('userLocationSetting').regionId);
    });
  },

  model (params) {
    let allParams = {
      location: this.get('userLocationSetting').regionId,
      artistName: this.get('artistEventParams').artist_name,
      artistId: this.get('artistEventParams').artist_id
    };

    return Ember.RSVP.hash({

      artist: this.get('store').findRecord('artist', allParams.artistId, {
        adapterOptions: { page: params.page,
                          min_date: params.min_date,
                          max_date: params.max_date }
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
    },
  }
});
