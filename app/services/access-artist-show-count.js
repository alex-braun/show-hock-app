import Ember from 'ember';

export default Ember.Service.extend({

  total: null,
  upcomingCount: null,
  regionCount: null,

  add(params) {
    this.set('total', params);
  },

  addParent(params) {
    this.set('upcomingCount', params);
  },

  addRegCount(params) {
    this.set('regionCount', params);
  },
});
