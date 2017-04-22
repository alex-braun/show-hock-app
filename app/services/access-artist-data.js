import Ember from 'ember';

export default Ember.Service.extend({
  artistName: null,
  artistId: null,

  addName(param) {
    return this.set('artistName', param);

  },

  addId(param) {
    return this.set('artistId', param);
  }
});
