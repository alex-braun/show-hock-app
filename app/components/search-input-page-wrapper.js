import Ember from 'ember';

export default Ember.Component.extend({

  accessArtistParams: Ember.inject.service(),

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

  // init() {
  //   this._super(...arguments);
  //   this.get('accessArtistParams').add(null);
  // },
///the accessArtistParams service receives input values from the navbar search
// didRender() {
//   console.log('this is did render');
//   this._super(...arguments);
//   this.get('accessArtistParams').add(null);
//
// },

  willDestroyElement() {
    this._super(...arguments);
    this.set('buttonVisible', false);
    this.set('entered', '');
  }

});
