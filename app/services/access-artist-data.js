import Ember from 'ember';

export default Ember.Service.extend({
  artistParam: null,

  add(params) {
    this.set('artistParam', params);
  },
});
