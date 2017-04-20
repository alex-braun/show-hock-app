import Ember from 'ember';

export default Ember.Route.extend({

  accessRegionObj: Ember.inject.service(),
  accessArtistShowCount: Ember.inject.service(),

  // nameAndId: Ember.inject.service('access-artist-data'),

  // artistId: null,

  // beforeModel(data) {
  //   this._super(...arguments);
  //   console.log(data);
  //   let id = parseInt(data.params['region.event'].region_id),
  //       name = data.params['region.event'].region_name;
  //
  //   this.get('nameAndId').addId(id);
  //   this.get('nameAndId').addName(name);
  //
  // },

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

/////57839

// lat/lng of NY, NY   Lodi is #67
// 40.714269&lng=-74.005973


    // filteredResults: Ember.computed('model.performance', function() {
    //   let currArtist = this.get('nameAndId').artistId;
    //   let result = this.get('model.performance');
    //   let arr = [];
    //   for (let i = 0; i < result.length; i++) {
    //     arr.push([i]);
    //   }
    //   let selection = result.objectsAt(arr);
    //   selection = selection.filter((element) => {
    //     return element.artist.id !== currArtist;
    //   });
    //   return selection;
    // }),
    //
    // actions: {
    //   goToArtist(name, id) {
    //     this.sendAction('goToArtist', name, id);
    //   }
    // }
    // });





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
  //   goToArtist(name, id) {
  //     this.transitionTo('artist.event.results',
  //         name,
  //         id,
  //         { queryParams: {
  //           page: 1,
  //           }
  //     });
    }

});
