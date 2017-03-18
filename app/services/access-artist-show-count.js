import Ember from 'ember';

export default Ember.Service.extend({

  total: null,

  add(params) {
    this.set('total', params);
  },
});
