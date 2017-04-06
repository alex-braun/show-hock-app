import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['upcoming-venue-events'],
  // concertId: Ember.inject.service('access-concert-id'),

  filteredResults: Ember.computed('calendar.event', function() {
    let concertId = this.get('concertId');
    let result = this.get('calendar.event');
    let arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push([i]);
    }
    let selection = result.objectsAt(arr);
    selection = selection.filter((element) => {
      return element.id !== parseInt(concertId);
    });
    return selection;
  }),

  actions: {
    goToVenue(venueId) {
      this.sendAction('goToVenue', venueId);
    }
  }
});


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
