import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['upcoming-events-wrapper'],
  // upcomingEventsStore: Ember.inject.service(),

  // upcomingInfo: null,
  // upcomingEventArtist: Ember.inject.service(),
  // location: Ember.inject.service('geo-location'),
  // store: Ember.inject.service(),
  //
  // init() {
  //   this._super(...arguments);
  //   let location = this.get('location').clientIp;
  //   let artist = this.get('upcomingEventArtist').parameters.artist;
  //   let data = this.get('store').query('upcoming-event', {location: location, artist: artist});
  //   this.set('upcomingInfo', data);
  // }

  // didInsertElement() {
  //   let location = this.get('location').clientIp;
  //   let artist = this.get('upcomingEventArtist').parameters.artist;
  //   let data = this.get('store').query('upcoming-event', {location: location, artist: artist});
  //   this.set('upcomingInfo', data);
  // }


  // didInsertElement() {
  //   this._super(...arguments);
  //   this.get('upcomingEventsStore').upcomingEvent().then((results) => {
  //     this.set('upcomingInfo', results);
  //   });
  // }

});
