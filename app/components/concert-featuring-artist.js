import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['concert-featuring-artist'],

  isFullList: false,

  init() {
    this._super(...arguments);
    console.log('concert-featuring-artist initializing');
    this.set('isFullList', false);
  },
  actions: {
    getFullList() {
      this.toggleProperty('isFullList');
    },
  }
});
