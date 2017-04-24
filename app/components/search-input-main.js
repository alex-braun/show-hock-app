import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['form-group search-input search-input-em-wrap'],

  accessArtistParams: Ember.inject.service(),

  didInsertElement() {
    this.set('keyword', this.get('accessArtistParams').param);
  },
});
