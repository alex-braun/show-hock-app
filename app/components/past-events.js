import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['similar-artists-wrapper'],

  filteredResults: Ember.computed('model.event', function() {
    let result = this.get('model.event');
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

  // actions: {
  //   getRegionShows(id) {
  //     this.sendAction('getRegionShows', id);
  //   }
  // }
  });
