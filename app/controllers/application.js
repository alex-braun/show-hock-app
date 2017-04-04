import Ember from 'ember';

export default Ember.Controller.extend({

    dropdownIndex: 0,

    dropdown: Ember.computed('dropdownIndex', function() {
      return this.get('dropdowns')[this.get('dropdownIndex')];
    }),

    dropdowns: [
      {name: 'Artists'},
      {name: 'Region'},
      {name: 'Venues'}
    ],


});
