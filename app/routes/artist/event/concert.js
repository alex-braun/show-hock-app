import Ember from 'ember';

export default Ember.Route.extend({

  model (param) {
    return this.get('store').findRecord('concert', param.concert_id)

    .then((result) => {

      if (result.get('venue').id) {

        return this.get('store').findRecord('venue-calendar', result.get('venue').id, { adapterOptions: { page: 1 }})

        .then((calendar) => {
          let meta = calendar.get('meta');
          result.set('calendar', calendar);
          return meta, result;

        });
      } else {
        return result;
      }
    });
  },

  actions: {
    goToArtist(name, id) {
      this.transitionTo('artist.event.results',
        name,
        id,
        { queryParams: {
            page: 1,
            min_date: '',
            max_date: '',
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
