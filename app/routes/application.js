import Ember from 'ember';
import ResetScrollMixin from '../mixins/reset-scroll';


export default Ember.Route.extend(ResetScrollMixin, {
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  getUserCalendars: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  userLocationSetting: Ember.inject.service(),
  accessArtistParams: Ember.inject.service(),

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
      this.get('accessArtistParams').add(null);
    },

    userChooseRegion() {
      this.transitionTo('user.change-location');
    }
  },
});
