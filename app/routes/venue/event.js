import Ember from 'ember';

export default Ember.Route.extend({

  accessArtistParams: Ember.inject.service(),
  // nameAndId: Ember.inject.service('access-artist-data'),
  //
  // artistId: null,
  //
  // beforeModel(data) {
  //   this._super(...arguments);
  //   let id = parseInt(data.params['artist.event'].artist_id),
  //       name = data.params['artist.event'].artist_name;
  //
  //   this.get('nameAndId').addId(id);
  //   this.get('nameAndId').addName(name);
  //
  // },
  model (param) {
    return Ember.RSVP.hash({

      venue: this.get('store').findRecord('venue', param.venue_id)
      .then((result) => {
        this.get('accessArtistParams').add(result.get('displayName'));
        let meta = result.get('meta');
        return meta, result;
      }),

      calendar: this.get('store').findRecord('venue-calendar', param.venue_id, {
        adapterOptions: { page: 1 }
      })
      .then((result) => {
        let meta = result.get('meta');
        return meta, result;
      }),

    })

    .then((result) => {
      return this.get('store').findRecord('region', result.venue.get('metroArea').id, { adapterOptions: { page: 1,
                        per_page: 50,
                        min_date: '',
                        max_date: ''}
      })
      .then((region) => {
        let meta = region.get('meta');
        result.region = region;
        return meta, result;
      });
    });
  },

  actions: {

    regionConcert(concertId, regionName, regionId) {
      this.transitionTo('region.event.concert',
        regionName, regionId, concertId,
          { queryParams: {
            page: 1,
            per_page: 50,
            min_date: '',
            max_date: ''
          }
        });
    }
  //   goToArtist(name, id) {
  //     this.transitionTo('artist.event.results',
  //         name,
  //         id,
  //         { queryParams: {
  //           page: 1,
  //           }
  //     });
  //   }
  }
});
