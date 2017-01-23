import Ember from 'ember';
import moment from 'moment';

export function formatMonth(params/*, hash*/) {
  return moment(params.toString()).format('MMMM');
}

export default Ember.Helper.helper(formatMonth);
