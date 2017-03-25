import Ember from 'ember';

export default Ember.Service.extend({

parameter: null,

add(param) {
  return this.set('parameter', param);
},

});
