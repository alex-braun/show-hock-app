import Ember from 'ember';

export default Ember.Service.extend({
///GET THE USER'S CALENDARS.  EACH CALENDAR IS ONE EVENT
store: Ember.inject.service('store'),

  userCalendar: [],
  userCalendarEventIds: [],

  getCalendar() {
    this.set('userCalendar', []);
    this.set('userCalendarEventIds', []);
    this.get('store').findAll('calendar')
    .then((calendars) => {
      let eachCalendar = {};
        calendars.forEach(calendar => {
           eachCalendar = {
             id: calendar.get('id'),
             isDone: calendar.get('isDone'),
             eventId: calendar.get('eventId'),
             endDate: calendar.get('endDate'),
           };
           this.get('userCalendar').pushObject(eachCalendar);
           this.get('userCalendarEventIds').pushObject(eachCalendar.eventId);
        });
    });
  },

  clearCalendar() {
    this.set('userCalendar', []);
    this.set('userCalendarEventIds', []);
  }
});
