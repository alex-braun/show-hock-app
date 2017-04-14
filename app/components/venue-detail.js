import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'li',
  classNames: ['region-detail list-item'],

  buttonTitle: 'Details',

  actions: {
    goToConcert(concert) {
      this.sendAction('goToConcert', concert);
    }
  }
});
