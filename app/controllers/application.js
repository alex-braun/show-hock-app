import Ember from 'ember';

export default Ember.Controller.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  getUserCalendars: Ember.inject.service(),

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

  didRender() {
      if (this.get('isAuthenticated')) {
        this.get('getUserCalendars').getCalendar();
      }
  },

actions: {
  signOut () {
    this.get('auth').signOut()
      .then(() => {
        this.get('getUserCalendars').clearCalendar();
        this.get('store').unloadAll();
      })
      .then(() => {
        this.transitionToRoute('sign-in');
      })
      // .then(() => {
      //   this.get('flashMessages').warning('You have been signed out.');
      // })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Are you sure you\'re signed-in?');
      });
    },

    allSearch(param) {
      if (!(param === null || param === undefined || param.match(/^ *$/) !== null)) {
        this.set('keyword', '');
        this.replaceRoute('searches.search.results',
        param,
        { queryParams: {
            page: 1,
            per_page: 10
          }
        });
      }
    },
  }
});
