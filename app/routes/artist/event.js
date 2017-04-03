import Ember from 'ember';

export default Ember.Route.extend({

  // count: Ember.inject.service('access-artist-show-count'),

////GET THE ARTIST NAME FOR USAGE IN NESTED ROUTES
  nameAndId: Ember.inject.service('access-artist-data'),
  // accessArtistId: Ember.inject.service(),
  // geoLocation: Ember.inject.service(),
  // eventModel: null,
  // accessArtistParams: Ember.inject.service(),
  // accessArtistData: Ember.inject.service(),
  // upcomingEventArtist: Ember.inject.service(),
  artistId: null,

  beforeModel(data) {
    this._super(...arguments);
    // let getGeo;
    // let ip = this.get('geoLocation').clientIp;
    // if (ip === null || ip === undefined) {
    //   getGeo = this.get('geoLocation').getIp();
    // }
    // this.get('name').add(data.params['artist.event']);

    let id = parseInt(data.params['artist.event'].artist_id),
        name = data.params['artist.event'].artist_name;
    // name = data.params['artist.'];
    // this.set('artistId', id);
    this.get('nameAndId').addId(id);
    this.get('nameAndId').addName(name);

    // return getGeo;
  },

  model (param) {
    // let upcomingParamObj = {
    // location: this.get('location').clientIp,
    // artist: param.artist_name
    // };
    // console.log(param);
    return Ember.RSVP.hash({


      search: this.get('store').findRecord('artist-search', param.artist_name)
      .then((result) => {
        // console.log(result.id);
        let meta = result.get('meta');
        return meta, result;
      }),

      artist: this.get('store').findRecord('artist', param.artist_id, {
        adapterOptions: { page: 1 }
      })
      .then((result) => {
        let meta = result.get('meta');
        return meta, result;
      }),
      //
      // upcomingInfo: this.get('store').query('upcoming-event', upcomingParamObj)
      // .then((result) => {
      //   return result;
      // }),

      similar: this.get('store').findRecord('similar-artist', param.artist_id)
      .then((result) => {
        let arr = [];
        for (let i = 0; i < 10; i++) {
          arr.push([i]);
        }
           let selection = result.data.artist.objectsAt(arr);
           selection = selection.filter((element) => {
             return element !== undefined;
           });
           return selection;
      }),
    });

    // similar: this.get('store').query('similar-artist', params).then((result) => {
    //       let arr = [];
    //       for (let i = 0; i < 10; i++) {
    //         arr.push([i]);
    //       }
    //          let selection = result.objectsAt(arr);
    //          selection = selection.filter((element) => {
    //            return element !== undefined;
    //          });
    //          return selection;
    //     }),
      // search: this.get('store').query('artist-search', {search: params.artist})
      // .then((result) => {
      //   let meta = result.get('meta');
      //   return meta, result;
      // }),
  //
  //     similar: this.get('store').query('similar-artist', params).then((result) => {
  //       let arr = [];
  //       for (let i = 0; i < 10; i++) {
  //         arr.push([i]);
  //       }
  //          let selection = result.objectsAt(arr);
  //          selection = selection.filter((element) => {
  //            return element !== undefined;
  //          });
  //          return selection;
  //     }),
  //
  //     upcomingInfo: this.get('store').query('upcoming-event', upcomingParamObj)
  //     .then((result) => {
  //       return result;
  //     }),
  //     });
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
    }
  }
  // setupController: function(controller, model, params) {
  //   this._super(controller, model, params);
  //   let upcomingParamObj = {
  //     location: this.get('location').clientIp,
  //     artist: params.queryParams.artist
  //   };
  //   this.get('store').query('artist-search', { search: params.queryParams.artist })
  //   .then((result) => {
  //     let meta = result.get('meta');
  //     return controller.set('search', result),
  //     meta;
  //   });
  // );
    //
    // this.get('store').query('similar-artist', params.queryParams).then((result) => {
    //   let arr = [];
    //   for (let i = 0; i < 10; i++) {
    //     arr.push([i]);
    //   }
    //      let selection = result.objectsAt(arr);
    //      selection = selection.filter((element) => {
    //        return element !== undefined;
    //      });
    //      return controller.set('similar', selection);
    // });
  // );
    //
    //  this.get('store').query('upcoming-event', upcomingParamObj)
    //     .then((result) => {
    //       controller.set('upcomingInfo', result);
    //     });
      // );

    // controller.set('search', model.search);
    // controller.set('event', model);
    // controller.set('similar', model.similar);
    // controller.set('upcomingInfo', model.upcomingInfo);
  // },

  // afterModel (model) {
  //   let meta = model.event.get('meta');
  //   //add artist model params params
  //   this.get('upcomingEventArtist').add(model.event.query);
  //   //add artist meta data
  //   this.get('accessArtistData').add(meta);
  // },

  // actions: {
  //   changeArtistPage(param) {
  //     this.transitionTo( { queryParams: { page: param } } );
  //   },
  //
  //   previousPage(param) {
  //     this.transitionTo( { queryParams: { page: param } } );
  //   },
  //
  //   nextPage(param) {
  //     this.transitionTo( { queryParams: { page: param } } );
  //   },
  // }

});
