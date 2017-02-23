import Ember from 'ember';

export default Ember.Service.extend({
  parameters: null,

  add(params) {
    this.set('parameters', params);
  },
});
