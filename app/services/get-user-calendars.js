import Ember from 'ember';

export default Ember.Service.extend({

store: Ember.inject.service('store'),

  userCalendar: {},
  userEventIdArr: [],
  userCalenIdArr: [],

  init() {
    this.set('userCalendar', {});
    this.set('userEventIdArr', []);
  },

  getCalendar() {
    this.set('userCalendar', {});
    this.set('userEventIdArr', []);
    this.set('userCalenIdArr', []);
    // console.log(this.get('userCalendar'));
    // console.log(this.get('userEventIdArr'));
    // console.log(this.get('userCalenIdArr'));
    this.get('store').findAll('calendar')
    .then((response) => {
      // console.log(response);
      this.set('userCalendar', response);
      let userCalendar = response;
      let calendarObj = userCalendar.get('content');
      for (let i = 0; i < calendarObj.length; i++) {
        // console.log(calendarObj[i]);
        this.get('userEventIdArr').pushObject(calendarObj[i]._data.eventId);
        this.get('userCalenIdArr').pushObject(calendarObj[i].id);
      }
      // console.log(this.get('userEventIdArr'));
      // console.log(this.get('userCalenIdArr'));
      return this.get('userEventIdArr'), this.get('userCalenIdArr');
    });
  }
});
