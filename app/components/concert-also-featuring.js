import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['artist-also-featuring'],

  nameAndId: Ember.inject.service('access-artist-data'),

  filteredResults: Ember.computed('model.performance', function() {
    let currArtist = this.get('nameAndId').artistId;
    let result = this.get('model.performance');
    let arr = [];
    for (let i = 0; i < result.length; i++) {
      arr.push([i]);
    }
    let selection = result.objectsAt(arr);
    selection = selection.filter((element) => {
      return element.artist.id !== currArtist;
    });
    return selection;
  }),

  actions: {
    goToArtist(name, id) {
      this.sendAction('goToArtist', name, id);
    }
  }
});



// import Ember from 'ember';
//
// export default Ember.Component.extend({
//   classNames: ['upcoming-region-events'],
//   buttonTitle: 'See More Shows',
//
//   geoLocation: Ember.inject.service(),
//
//   filteredResults: Ember.computed('model.event', function() {
//     let result = this.get('model.event');
//     let arr = [];
//     for (let i = 0; i < 5; i++) {
//       arr.push([i]);
//     }
//     let selection = result.objectsAt(arr);
//     selection = selection.filter((element) => {
//       return element !== undefined;
//     });
//     return selection;
//   }),
//
//   actions: {
//     getRegionShows(id) {
//       this.sendAction('getRegionShows', id);
//     }
//   }
// });
