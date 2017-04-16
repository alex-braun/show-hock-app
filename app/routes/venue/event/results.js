import Ember from 'ember';

export default Ember.Route.extend({

  venueId: null,

  queryParams: {
    page: {
      refreshModel: true
    },
  },

  beforeModel(param) {
    this._super(...arguments);
    this.set('venueId', param.params['venue.event']);
  },

  model(params) {
    console.log(this.get('venueId'));
    let venueId = this.get('venueId');
      return this.get('store').findRecord('venue-calendar', venueId.venue_id, { adapterOptions: { page: params.page }})
      .then((result) => {
        let meta = result.get('meta');
        return meta, result;
    });
  },

  actions: {
    goToConcert(concert) {
      this.transitionTo('venue.event.concert', concert);
    }
  }
});
