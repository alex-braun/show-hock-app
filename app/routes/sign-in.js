import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  getUserCalendars: Ember.inject.service(),


  model () {
    return RSVP.Promise.resolve({});
  },

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
      .then(() => {
        this.transitionTo('application');
      })
      .then(() => {
        // this.get('flashMessages').success('Thanks for signing in!');
        this.get('getUserCalendars').getCalendar();
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
