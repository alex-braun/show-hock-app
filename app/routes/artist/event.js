import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    let paramArtist = this.paramsFor('artist.event.results');
    // let routing = this.get('params');
      return Ember.RSVP.hash({
        artist: this.get('store').query('artist', paramArtist).then((result) => {
          let meta = result.get('meta');
          return meta, result;
        }),
        basic: this.get('store').query('artist-search', {search: paramArtist.artist})
      });
    }
});
