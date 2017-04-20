import Ember from 'ember';

export default Ember.Controller.extend({

  name: Ember.inject.service('access-artist-name'),

  queryParams: ['page'],
  page: 'page',

  actions: {
    changeVenuePage(param) {
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
