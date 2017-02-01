import Ember from 'ember';

export default Ember.Service.extend({

  artistMeta: null,

  add(params) {
    this.set('artistMeta', params);
  }
});
