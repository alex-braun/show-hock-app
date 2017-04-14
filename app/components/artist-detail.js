import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['region-detail list-item'],
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
