import Ember from 'ember';

export default Ember.Route.extend({
  // eventModel: null,
  // accessArtistParams: Ember.inject.service(),
  accessArtistData: Ember.inject.service(),
  upcomingEventArtist: Ember.inject.service(),
  geoLocation: Ember.inject.service(),

  queryParams: {
    getId: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    },
    artist: {
      refreshModel: true
    },
  },

  beforeModel() {
    this._super(...arguments);
    let ip = this.get('location').clientIp;
    if (ip === null || ip === undefined) {
      return this.get('geoLocation').getIp();
    }
  },

  model (params) {
    let upcomingParamObj = {
    location: this.get('location').clientIp,
    artist: params.artist
    };

    return Ember.RSVP.hash({

      // event: this.get('store').query('artist', params).then((result) => {
      //   let meta = result.get('meta');
      //   return meta, result;
      // }),

      search: this.get('store').query('artist-search', {search: params.artist})
      .then((result) => {
        let meta = result.get('meta');
        return meta, result;
      }),

      // search: params.artist,


      // return this.get('store').query('artist', params).then((result) => {
      //   let meta = result.get('meta');
      //   return meta, result;
      // });
      // event: params,

      similar: this.get('store').query('similar-artist', params).then((result) => {
        let arr = [];
        for (let i = 0; i < 10; i++) {
          arr.push([i]);
        }
           let selection = result.objectsAt(arr);
           selection = selection.filter((element) => {
             return element !== undefined;
           });
           return selection;
      }),

      // similar: params,

      upcomingInfo: this.get('store').query('upcoming-event', upcomingParamObj)
      .then((result) => {
        return result;
      }),
      // upcomingInfo: upcomingParamObj,

      });
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
