import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['page'],
  page: 'page',

  actions: {
    changeArtistPage(param) {
      this.set('page', param);
    },

    previousPage(param) {
      this.set('page', param);
    },

    nextPage(param) {
      this.set('page', param);
    },
  }
});
