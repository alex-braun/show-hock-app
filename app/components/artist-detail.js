import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['artist-detail'],

  actions: {
   changeRoute(val) {
     this.sendAction('changeRoute', val);
   }
 }
});
