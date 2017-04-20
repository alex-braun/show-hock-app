import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['button-to-concert-wrapper'],

  actions: {
    buttonClick(regionName, regionId) {
      this.sendAction('buttonClick', regionName, regionId);
    }
  }
});
