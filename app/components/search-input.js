import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['form-group search-input search-input-em-wrap'],

  actions: {
    reset() {
      return this.set('keyword', '');
    },
    isValidFocusOut() {
      let entry = this.get('keyword');
      if (/\S/.test(entry)) {
        return;
      } else {
      this.set('keyword', '');
      }
    }
  }
});
