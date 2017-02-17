import Ember from 'ember';

export default Ember.Controller.extend({

    dropdownIndex: 0,

    dropdown: Ember.computed('dropdownIndex', function() {
      return this.get('dropdowns')[this.get('dropdownIndex')];
    }),

    dropdowns: [
      {name: 'Artists'},
      {name: 'Events'},
      {name: 'Venues'},
      {name: 'Region'}
    ],

    actions: {
      submit() {
        console.log(queryParams);
        // this.transitionToRoute('artist.search.results', {queryParams: })
      }
    },
});

  // {{!-- {{#link-to 'artist.search.results' (query-params search=entered)}} --}}
