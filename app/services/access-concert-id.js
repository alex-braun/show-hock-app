import Ember from 'ember';

export default Ember.Service.extend({
  concertId: null,

  addConcertId(param) {
    return this.set('concertId', param);
  },

});
