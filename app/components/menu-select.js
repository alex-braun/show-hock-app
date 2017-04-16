import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  // classNames: ['search-select item'],
  classNames: ['search-select item'],


  dropdownIndex: 0,

  // dropdown: Ember.computed('dropdownIndex', function() {
  //   console.log('dropdown from component');
  //   return this.get('dropdowns')[this.get('dropdownIndex')];
  // }),

  didInsertElement() {
    this._super(...arguments);
    this.set('dropdown', this.get('dropdowns')[0]);
  },

  actions: {
    dropdownIndex(val) {
      this.set('dropdown', this.get('dropdowns')[val]);
    }
  },

  dropdowns: [
    {name: 'Artists'},
    {name: 'Region'},
    {name: 'Venues'}
  ],
});
