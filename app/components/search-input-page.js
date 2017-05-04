import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['form-group search-input search-input-em-wrap'],

  willDestroyElement() {
    this._super(...arguments);
    return this.set('keyword', '');
  }
});
