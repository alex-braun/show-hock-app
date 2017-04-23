import Ember from 'ember';

export default Ember.Route.extend({

  model (param) {
    return this.get('store').findRecord('concert', param.concert_id);
  },

  actions: {
    goToArtist(name, id) {
      this.transitionTo('artist.event.results',
        name,
        id,
        { queryParams: {
            page: 1,
          }
      });
    },

    goToVenue(id) {
      this.transitionTo('venue.event.results',
        id,
        { queryParams: {
          page: 1,
          }
        });
    }
  }
});
