import Ember from 'ember';

export default Ember.Route.extend({

  // artistId: null,
  // artistName: null,
  // nameAndId: Ember.inject.service('access-artist-data'),

  // accessArtistData: Ember.inject.service(),
  //
  // queryParams: {
  //   concertId: {
  //     refreshModel: true
  //   },
  // },

  // beforeModel(data) {
  //   console.log(data.params['artist.event'].artist_id);
  //   return this.set('artistId', data.params['artist.event'].artist_id);
  // },

  model (param) {
    // return this.get('store').query('concert', params);
    return this.get('store').findRecord('concert', param.concert_id);
  },

  // actions: {
  //   getFullList(concertId) {
  //
  //     console.log(concertId);
  //     return this.get('store').findRecord('concert', {id: concertId});
  //   }
  // }
  actions: {
    goToArtist(name, id) {
      this.transitionTo('artist.event.results',
          name,
          id,
          { queryParams: {
            page: 1,
            }
      });
  }
}
});
