import Ember from 'ember';

export default Ember.Route.extend({

  regionName: null,
  regionId: null,
  randArray: null,
  userLocationSetting: Ember.inject.service(),


  beforeModel() {
    this._super(...arguments);
    return this.get('userLocationSetting').getRegion().then(() => {
      return this.set('regionName',this.get('userLocationSetting').regionName),
      this.set('regionId', this.get('userLocationSetting').regionId);
    });
  },

  model() {
    let regionId = this.get('regionId');
    return this.get('store').findRecord('region', regionId, { adapterOptions: { page: 1 }
    })
    .then((result) => {
      // let mostPop = result.data.event.sortBy('popularity').reverse();
      // let mostPop = result.sortBy('popularity').reverse();
      // console.log(mostPop);
      let meta = result.get('meta');
      return meta, result;
    });
  },



//   similar: this.get('store').findRecord('similar-artist', param.artist_id)
//   .then((result) => {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//       arr.push([i]);
//     }
//        let selection = result.data.artist.objectsAt(arr);
//        selection = selection.filter((element) => {
//          return element !== undefined;
//        });
//        return selection;
//   }),
// });
  setupController(controller, model) {
    controller.set('model', model);
  },
  // afterModel(model) {
  //   let len = model.data.event.length;
  //   let randArray = [];
  //   for (let i = 0; i < 4; i++) {
  //     randArray.push(Math.floor(Math.random()*(len-0)));
  //   }
  //   return this.set('randArray', randArray);
  // }
  actions: {
    getRegionShows(val) {
      console.log(val);
      this.transitionTo('region.event.results', val);
    },

    userChooseRegion() {
      this.transitionTo('user.change-location');
    }
  }
});
