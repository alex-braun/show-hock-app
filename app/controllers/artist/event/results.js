import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({

  name: Ember.inject.service('access-artist-name'),

  queryParams: ['page', 'min_date', 'max_date'],
  page: 'page',
  min_date: '',
  max_date: '',

  actions: {
    changeArtistPage(param) {
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
      this.set('minDate', min_date);
      this.set('maxDate', max_date);
      this.set('page', 1);
   },
  }
});
