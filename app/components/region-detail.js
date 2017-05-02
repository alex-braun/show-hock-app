import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['region-detail list-item'],

  userPicked: false,
  // userEventArr: [],
  getUserCalendars: Ember.inject.service(),

  // userSelected: Ember.computed('event', function() {
  //   let userCalendar = this.get('userEventArr');
  //   if (userCalendar.includes(this.get('event').id)) {
  //     console.log('it is included');
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }),

  // userSelected: Ember.computed('event', function() {
  //   let userCalendar = this.get('userEventArr');
  //   if (userCalendar.includes(this.get('event').id)) {
  //     console.log('it is included');
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }),

  init() {
    this._super(...arguments);
    let userCalendar = this.get('getUserCalendars').userEventIdArr;
    // console.log(userCalendar);
    // console.log(this.get('event').id);
    if (userCalendar.includes(this.get('event').id)) {
      return this.set('userPicked', true);
    } else {
      return this.set('userPicked', false);
    }
  },

  // willUpdate() {
  //   let userCalendar = this.get('getUserCalendars').userEventIdArr;
  //
  // },

  // clickListener:(function() {
  //   let userCalendar = this.get('userEventArr');
  //   if (userCalendar.includes(this.get('event').id)) {
  //     console.log('it is included');
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }).observes('trackEvent'),

  // userSelected: Ember.computed('event', function() {
  //   let userCalendar = this.get('userEventArr');
  //   if (userCalendar.includes(this.get('event').id)) {
  //     console.log('it is included');
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }),


  // uniqueLoc: Ember.computed.filter('uniqueLocations', function(loc) {
  //   if (loc.get('metroArea').country.displayName === 'US') {
  //     loc.set('state', loc.get('metroArea').state.displayName);
  //   } else {
  //     loc.set('state', 'noState');
  //   }
  //   loc.set('country', loc.get('metroArea').country.displayName);
  //   return parseInt(loc.id) !== this.get('currLoc');
  // }),
  // limited: Ember.computed('uniqueLoc', function() {
  //   let num;
  //   if (this.get('uniqueLoc').length > 30) {
  //     num = 30;
  //   } else {
  //     num = this.get('uniqueLoc').length;
  //   }
  //   return this.get('uniqueLoc').splice(0, num);
  // }),
  // ordered: Ember.computed.sort('limited', 'sortAttrs'),
  // sortAttrs: ['state'],

  // init() {
  //   this._super(...arguments);
  //   this.set('userEventArr', []);
  //   let userCalendar = this.get('getUserCalendars').userCalendar;
  //   let calendarObj = userCalendar.get('content');
  //   for (let i = 0; i < calendarObj.length; i++) {
  //     this.get('userEventArr').pushObject(calendarObj[i]._data.event_id);
  //   }
  //   console.log(this.get('userEventArr'));
  // },
  // didRender() {
  //   let calendar = this.get('getUserCalendars').userCalendar;
  //   let calendarObj = calendar.get('content');
  //   let showIds = [];
  //   for (let i = 0; i < calendarObj.length; i++) {
  //     showIds.push(calendarObj[i]._data.show_id);
  //   }
  //
  // },

  actions: {
    goToConcert(concertId) {
      this.sendAction('goToConcert', concertId);
    },

    trackEvent(event) {
      this.set('userPicked', true);
      this.sendAction('trackEvent', event);
    },

    unTrackEvent(event) {
      this.set('userPicked', false);
      this.sendAction('unTrackEvent', event);
    },

    goToAuthenticate(event) {
      this.sendAction('goToAuthenticate', event);
    }
  }
});
