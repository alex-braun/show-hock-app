import Ember from 'ember';

export default Ember.Route.extend({

  // name: Ember.inject.service('access-artist-data'),
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
    this.set('artistId', data.params['artist.event.results']);
    // return getGeo;
  },

  model (param) {
    // let upcomingParamObj = {
    // location: this.get('location').clientIp,
    // artist: param.artist_name
    // };

    return Ember.RSVP.hash({


      search: this.get('store').findRecord('artist-search', param.artist_name)
      .then((result) => {
        let meta = result.get('meta');
        return meta, result;
      }),
      //
      // upcomingInfo: this.get('store').query('upcoming-event', upcomingParamObj)
      // .then((result) => {
      //   return result;
      // }),

      similar: this.get('store').findRecord('similar-artist', this.get('artistId').artist_id)
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
