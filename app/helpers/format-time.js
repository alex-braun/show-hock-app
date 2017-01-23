import Ember from 'ember';
import moment from 'moment';

export function formatTime(params/*, hash*/) {
  return moment(params).format('LT');
}

export default Ember.Helper.helper(formatTime);
