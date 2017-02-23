import Ember from 'ember';

export default Ember.Service.extend({
  upcomingInfo: null,
  upcomingEventArtist: Ember.inject.service(),
  store: Ember.inject.service(),
  location: Ember.inject.service('geo-location'),

  upcomingEvent() {
    let artist = this.get('upcomingEventArtist').parameters.artist;
    let location = this.get('location').clientIp;
    return new Ember.RSVP.Promise(function(resolve) {
      resolve(this.store.query('upcoming-event', {location: location, artist: artist}));
    });
  }
});


// init() {
//   this._super(...arguments);
//   let location = this.get('location').clientIp;
//   let artist = this.get('upcomingEventArtist').parameters.artist;
//   let data = this.get('store').query('upcoming-event', {location: location, artist: artist});
//   this.set('upcomingInfo', data);
// }
// });
