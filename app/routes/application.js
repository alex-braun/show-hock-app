import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  getUserCalendars: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  userLocationSetting: Ember.inject.service(),

  beforeModel() {
    this._super(...arguments);
    return this.get('userLocationSetting').getRegion().then(() => {
      return this.set('regionName',this.get('userLocationSetting').regionName),
             this.set('regionId', this.get('userLocationSetting').regionId);
    });
  },

  model() {
    if (this.get('isAuthenticated')) {
      this.get('getUserCalendars').getCalendar();
    }
  },

  actions: {

    // signOut () {
    //   this.get('auth').signOut()
    //     .then(() => this.get('store').unloadAll())
    //     .then(() => this.transitionTo('sign-in'))
    //     .then(() => {
    //       this.get('flashMessages').warning('You have been signed out.');
    //     })
    //     .catch(() => {
    //       this.get('flashMessages')
    //       .danger('There was a problem. Are you sure you\'re signed-in?');
    //     });
    // },

    error (reason) {
      let unauthorized = reason.errors && reason.errors.some((error) =>
      error.status === '401'
      );

      if (unauthorized) {
        this.get('flashMessages')
        .danger('You must be authenticated to access this page.');
        this.transitionTo('/sign-in');
      } else {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      }
      return false;
    },

    allSearch(param) {
      if (!(param === null || param === undefined || param.match(/^ *$/) !== null)) {
        // this.transitionTo('searches.search.results',
        this.replaceWith('searches.search.results',
        param,
        { queryParams: {
            page: 1,
            per_page: 10
          }
        });
      }
    },

    goToRegion(name, id) {
      this.transitionTo('region.event.results',
          name,
          id,
          { queryParams: {
            page: 1,
            per_page: 50
            }
      });
    },

    goToHome() {
      this.transitionTo('index');
    },

    userChooseRegion() {
      this.transitionTo('user.change-location');
    }
  },
});
