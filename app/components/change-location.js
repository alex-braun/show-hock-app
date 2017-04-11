import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['change-location-wrapper'],

  actions: {
    userChooseRegion() {
      this.sendAction('userChooseRegion');
    }
  }
});
