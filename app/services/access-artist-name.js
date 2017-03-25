import Ember from 'ember';

export default Ember.Service.extend({
  name: null,

  add(param) {
    return this.set('name', param);
  },
});
