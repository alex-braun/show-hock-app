import Ember from 'ember';

export default Ember.Service.extend({

  param: null,

  add(params) {
    this.set('param', params);
    console.log(this.get('param'));
  },
});
