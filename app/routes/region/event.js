import Ember from 'ember';

export default Ember.Route.extend({

  accessRegionObj: Ember.inject.service(),
  accessArtistShowCount: Ember.inject.service(),
  getUserCalendars: Ember.inject.service(),


  model (params) {
    return Ember.RSVP.hash({

      region: this.get('store').findRecord('region', params.region_id, {
        adapterOptions: { page: 1,
                          per_page: 1,
                          min_date: '',
                          max_date: ''}
      })
      .then((result) => {
        let meta = result.get('meta');
        this.get('accessArtistShowCount').addRegCount(meta.total_entries);
        return meta, result;
      }),

      search: this.get('store').findRecord('region-search', params.region_name, {
        adapterOptions: { page: 1,
                          per_page: 50}
      })
      .then((result) => {
        let meta = result.get('meta');
        return meta, result;
      }),
    })

    .then((result) => {
      let response = result.search.get('location');
      let arr = [];
      for (let i = 0; i < response.length; i++) {
        arr.push([i]);
      }
      let matchReg = response.objectsAt(arr);
      matchReg = matchReg.filter((el) => {
        return el.id === parseInt(params.region_id);
      });
      return this.get('store').query('location_geo', {
        lat: matchReg[0].metroArea.lat,
        lng: matchReg[0].metroArea.lng
      })
      .then((loc) => {
        let meta = loc.get('meta');
        result.loc = loc;
        result.matchReg = matchReg;
        this.get('accessRegionObj').add(matchReg);
        return meta, result;
      });
    });
  },

  actions: {
    goToRegion(name, id) {
      this.transitionTo('region.event.results',
        name,
        id,
        { queryParams: {
            page: 1,
            per_page: 50
          }
      });
    },
  }
});
