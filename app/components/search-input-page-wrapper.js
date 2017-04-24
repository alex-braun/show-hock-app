import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'form',
  classNames: ['search-input-page-wrapper'],

  buttonVisible: false,

  observe: (function() {
    if (this.get('entered')) {
      this.set('buttonVisible', true);
    }
  }).observes('entered'),

  actions: {
    search(entered) {
      this.sendAction('search', entered);
    },

    reset() {
      if (this.get('entered')) {
        this.set('buttonVisible', false);
        this.set('entered', '');
      }
    }
  },

  willDestroyElement() {
    this.set('buttonVisible', false);
    this.set('entered', '');
  }

});
