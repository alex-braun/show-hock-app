import Ember from 'ember';

export default Ember.Route.extend({

  accessArtistData: Ember.inject.service(),

  eventController: Ember.computed(function() {
    return this.controllerFor('artist.event');
  }),

  setupController: function(controller, model) {
    this._super(controller, model);
    let artist = this.get('eventController').get('artist');
    let getId = this.get('eventController').get('getId');
    let page = this.get('eventController').get('page');
    this.get('store').query('artist', {
      artist: artist,
      getId: getId,
      page: page
      }).then((result) => {
      controller.set('events', result);
      this.get('accessArtistData').add(result.meta);
    });
  },

  // model() {
  //   console.log(this.get('eventController').get('artist'));
  //   let artist = this.get('eventController').get('artist');
  //   let getId = this.get('eventController').get('getId');
  //   let page = this.get('eventController').get('page');
  //   return this.get('store').query('artist', {
  //     artist: artist,
  //     getId: getId,
  //     page: page
  //     }).then((result) => {
  //     let meta = result.get('meta');
  //     return meta, result;
  //   });
  // },

  actions: {
    changeArtistPage(param) {
      console.log(this.get('eventController').get('artist'));
      this.get('eventController').send('changeArtistPage', param);
    },

    previousPage(param) {
      this.get('eventController').send('previousPage', param);
    },

    nextPage(param) {
      this.get('eventController').send('nextPage', param);
    },
  }
});
