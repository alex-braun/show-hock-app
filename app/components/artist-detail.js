import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['region-detail list-item'],
  buttonTitle: 'Details',

  actions: {
   goToConcert(value) {
     this.sendAction('goToConcert', value);
   }
 }
});
