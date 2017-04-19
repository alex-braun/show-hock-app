import Ember from 'ember';

export default Ember.Service.extend({

  matchRegion: {},

  add(obj) {
    this.set('regionName', obj);
  },
});
