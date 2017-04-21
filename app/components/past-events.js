import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['results-sidebar-wrapper'],

  filteredResults: Ember.computed('model.event', function() {
    let result = this.get('model.event');
    let arr = [];
    let num;
    if (result.length > 10) {
      num = 10;
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
    regionConcert(concertId, regionName, regionId) {
      this.sendAction('regionConcert', concertId, regionName, regionId);
    }
  }
  });
