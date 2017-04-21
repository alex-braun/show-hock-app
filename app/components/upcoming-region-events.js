import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['upcoming-region-events'],
  buttonTitle: 'See More Shows',

  userLocationSetting: Ember.inject.service(),

  filteredResults: Ember.computed('model.event', function() {
    let result = this.get('model.event');
    let arr = [];
    let num;
    if (result.length > 5) {
      num = 5;
    } else {
      num = result.length;
    }
    for (let i = 0; i < num; i++) {
      arr.push([i]);
    }
    let selection = result.objectsAt(arr);
    selection = selection.filter((element) => {
      return element !== undefined;
    });
    return selection;
  }),

  actions: {
    goToRegion(name, id) {
      this.sendAction('goToRegion', name, id);
    },

    goToConcert(concertId, regionName, regionId) {
      this.sendAction('goToConcert', concertId, regionName, regionId);
    },

    userChooseRegion() {
      this.sendAction('userChooseRegion');
    }
  }
});



// similar: this.get('store').findRecord('similar-artist', param.artist_id)
// .then((result) => {
//   let arr = [];
//   for (let i = 0; i < 10; i++) {
//     arr.push([i]);
//   }
//      let selection = result.data.artist.objectsAt(arr);
//      selection = selection.filter((element) => {
//        return element !== undefined;
//      });
//      return selection;
// }),
