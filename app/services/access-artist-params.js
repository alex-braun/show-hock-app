import Ember from 'ember';

export default Ember.Service.extend({

  param: null,
  // parameters: {
  //   artist: 311,
  //   getId: 486064,
  //   page: 1
  // },

  add(params) {
    this.set('param', params);
  },
});
