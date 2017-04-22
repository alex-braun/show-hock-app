import Ember from 'ember';

export default Ember.Controller.extend({

  location: Ember.inject.service('user-location-setting'),
  // dropdownIndex: 0,
  //
  // dropdown: Ember.computed('dropdownIndex', function() {
  //   console.log('dropdown from controller');
  //   return this.get('dropdowns')[this.get('dropdownIndex')];
  // }),
  //
  // dropdowns: [
  //   {name: 'Artists'},
  //   {name: 'Region'},
  //   {name: 'Venues'}
  // ],

  init() {
    this._super(...arguments);
    this.get('location').getRegion();
  },
});
