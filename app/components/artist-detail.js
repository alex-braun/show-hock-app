import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['artist-detail'],
  buttonTitle: 'Details',

  actions: {
  //  changeRoute(val) {
  //    this.sendAction('changeRoute', val);
  //  },

   goToConcert(value) {
     this.sendAction('goToConcert', value);
   }
 }
});
