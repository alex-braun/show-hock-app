import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['upcoming-region-events'],
  buttonTitle: 'See More Shows',

  geoLocation: Ember.inject.service(),

  filteredResults: Ember.computed('model.event', function() {
    let result = this.get('model.event');
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push([i]);
    }
    let selection = result.objectsAt(arr);
    selection = selection.filter((element) => {
      return element !== undefined;
    });
    return selection;
  }),

  actions: {
    getRegionShows(id) {
      this.sendAction('getRegionShows', id);
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
