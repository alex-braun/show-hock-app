import Ember from 'ember';

export default Ember.Route.extend({

    // queryParams: {
    //   getId: {
    //     refreshModel: true
    //   },
    //   page: {
    //     refreshModel: true
    //   },
    //   location: {
    //     refreshModel: true
    //   }
    // },
    // // region: Ember.computed('params.location', function() {
    // //   let region = this.get('params.location');
    // //   console.log(region);
    // // }),
    // // title: Ember.computed('regionSelect.metroArea.displayName', function() {
    // //   let region = this.get('regionSelect.metroArea.displayName');
    // //   console.log(region);
    // //   return region;
    // // }),
    //
    // model(params) {
    //   // console.log(params);
    //   return this.get('store').query('region', params)
    //   .then((result) => {
    //     let meta = result.get('meta');
    //     return meta, result;
    //   });
    //
    // }
    //
    // // actions: {
    // //   getRegionPage(params) {
    // //   return this.get('store').query('region', params);
    // //   }
    // // }
    //
    // // model () {
    // //   return artists;
    // // }
});
