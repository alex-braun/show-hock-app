import Ember from 'ember';

export default Ember.Controller.extend({

  userPicked: true,
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  // getUserCalendars: Ember.inject.service(),
  //
  // didInsertElement() {
  //   this._super(...arguments);
  //   let userCalendar = this.get('getUserCalendars').userEventIdArr;
  //   console.log(this.get('model'));
  //   if (userCalendar.includes(this.get('event').id)) {
  //     return this.set('userPicked', true);
  //   } else {
  //     return this.set('userPicked', false);
  //   }
  // },
});
