import Ember from 'ember';

import moment from 'moment';

export default Ember.Component.extend({

  classNames:['date-range-picker artist-route'],

  minDate: '',
  maxDate: '',

  minFromParams: Ember.computed('min_date', function() {
    if (this.get('min_date')) {
      let minConvert = moment(this.get('min_date'));
      return minConvert.format('MMM D, YYYY');
    }
    return '';
  }),

  maxFromParams: Ember.computed('max_date', function() {
    if (this.get('max_date')) {
      let maxConvert = moment(this.get('max_date'));
      return maxConvert.format('MMM D, YYYY');
    }
    return '';
  }),

  didInsertElement() {
    this.set('minDate', '');
    this.set('maxDate', '');
    let self = this;

    this.set('minDate', this.get('minFromParams'));
    this.set('maxDate', this.get('maxFromParams'));

    Ember.run.scheduleOnce('afterRender', this, function() {
      Ember.$('input[name="min_datefilter"]').daterangepicker({
      minDate: new Date(),
      // startDate: new Date(),
      singleDatePicker: true,
      showDropdowns: true,
      autoUpdateInput: false,
        locale: {
          label: 'To',
          format: 'MMM D, YYYY'
        },
      });

      Ember.$('input[name="max_datefilter"]').daterangepicker({
      minDate: new Date(),
      // startDate: false,
      singleDatePicker: true,
      showDropdowns: true,
      autoUpdateInput: false,
        locale: {
          format: 'MMM D, YYYY'
        },
      });

////MIN DATE FILTER
      Ember.$('input[name="min_datefilter"]').on('apply.daterangepicker', function(ev, picker) {
      Ember.$(this).val(picker.startDate.format('MMM D, YYYY'));
      // Ember.$('input[name="max_datefilter"]').data('daterangepicker').setStartDate(Ember.$(this).val());
      if (moment(Ember.$(this).val(), 'MMM D YYYY') > moment(self.get('maxDate'), 'MMM D YYYY')) {
          Ember.$(this).val(self.get('maxDate'));
        }
      self.set('minDate', Ember.$(this).val());
      });

////MAX DATE FILTER
      Ember.$('input[name="max_datefilter"]').on('apply.daterangepicker', function(ev, picker) {
      Ember.$(this).val(picker.startDate.format('MMM D, YYYY'));
      if (moment(Ember.$(this).val(), 'MMM D YYYY') < moment(self.get('minDate'), 'MMM D YYYY')) {
          Ember.$(this).val(self.get('minDate'));
        }
      self.set('maxDate', Ember.$(this).val());
      });

///CLEAR THE FILTER SELECTIONS
      Ember.$('.cancel-filter-button').on('click', function() {
      Ember.$('input[name="max_datefilter"], input[name="min_datefilter"]').val('');
      self.set('minDate', Ember.$('input[name="min_datefilter"]').val());
      self.set('maxDate', Ember.$('input[name="max_datefilter"]').val());
      });
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    this.set('minDate', '');
    this.set('maxDate', '');
  },

  actions: {
    filterDate() {
      let minDate = this.get('minDate'),
          maxDate = this.get('maxDate');
      this.sendAction('filterDate', minDate, maxDate);
    },
  }
});
