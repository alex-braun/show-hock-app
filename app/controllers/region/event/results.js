import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({

  accessRegionObj: Ember.inject.service(),
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  queryParams: ['page', 'min_date', 'max_date'],
  page: 'page',
  min_date: '',
  max_date: '',

  userEventArr: [],
  getUserCalendars: Ember.inject.service(),
  //
  // Ember.computed('model', function() {
  //
  // }),
  //
  init() {
    this._super(...arguments);
    this.set('userEventArr', []);
    let eventIds = this.get('getUserCalendars').userEventIdArr;
    this.set('userEventArr', eventIds);
  },

  actions: {
    changeRegionPage(param) {
      this.set('page', param);
    },

    previousPage(param) {
      this.set('page', param);
    },

    nextPage(param) {
      this.set('page', param);
    },

    filterDate(min, max) {
      let min_date;
      let max_date;
      if (min) {
        let minConvert = moment(min, 'MMM D YYYY');
         min_date = minConvert.format('YYYY-MM-DD');
      } else {
         min_date = '';
      }
      if (max) {
        let maxConvert = moment(max, 'MMM D YYYY');
        max_date = maxConvert.format('YYYY-MM-DD');
      } else {
        max_date = '';
      }
      this.set('min_date', min_date);
      this.set('max_date', max_date);
      this.set('page', 1);
   },
  }
});
