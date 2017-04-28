import Ember from 'ember';

export default Ember.Service.extend({

store: Ember.inject.service('store'),

  userCalendar: {},
  userEventIdArr: [],
  userCalenIdArr: [],

  getCalendar() {
    this.set('userCalendar', {});
    this.set('userEventIdArr', []);
    this.get('store').findAll('calendar')
    .then((response) => {
      this.set('userCalendar', response);
      let userCalendar = response;
      let calendarObj = userCalendar.get('content');
      for (let i = 0; i < calendarObj.length; i++) {
        this.get('userEventIdArr').pushObject(calendarObj[i]._data.event_id);
        this.get('userCalenIdArr').pushObject(calendarObj[i].id);
      }
    });
  }
});
