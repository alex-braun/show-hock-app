import Ember from 'ember';

export default Ember.Component.extend({
  // tagName: 'input'
  classNames: ['form-group search-input search-input-em-wrap'],

  // actions: {
  //   reset() {
  //     return this.set('keyword', '');
  //   },
  //   isValidFocusOut() {
  //     let entry = this.get('keyword');
  //     if (/\S/.test(entry)) {
  //       return;
  //     } else {
  //     this.set('keyword', '');
  //     }
  //   }
  // },

  willDestroyElement() {
    this._super(...arguments);
    return this.set('keyword', '');
  }
});