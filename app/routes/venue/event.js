import Ember from 'ember';

export default Ember.Route.extend({

  accessArtistParams: Ember.inject.service(),

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
  }
});
