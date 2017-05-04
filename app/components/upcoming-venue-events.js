import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['upcoming-venue-events'],

  filteredResults: Ember.computed('calendar.event', function() {
    let concertId = this.get('concertId');

    let result = this.get('calendar.event');
    let num;
    if (result.length > 4) {
      num = 4;
    } else {
      num = result.length;
    }
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push([i]);
    }
    let selection = result.objectsAt(arr);
    selection = selection.filter((element) => {
      if (element.id) {
      return element.id !== concertId;
      }
    });
    return selection;
  }),

  actions: {
    goToVenue(venueId) {
      this.sendAction('goToVenue', venueId);
    }
  }
});
