import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['concert-featuring-artist'],

  isFullList: false,

  init() {
    this._super(...arguments);
    this.set('isFullList', false);
  },
  actions: {
    getFullList() {
      this.toggleProperty('isFullList');
    },
  }
});
