import Ember from 'ember';

export default Ember.Route.extend({

  model (param) {
    return this.get('store').findRecord('concert', param.concert_id);
  },

  // model (param) {
  //   return Ember.RSVP.hash({
  //     concert: this.get('store').findRecord('concert', param.concert_id),
  //
  //     venue: this.modelFor('venue.event'),
  //   });
  // },

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
