import Ember from 'ember';
import moment from 'moment';

export function formatWeekday(params/*, hash*/) {
  return moment.utc(params.toString()).format('dddd');
}

export default Ember.Helper.helper(formatWeekday);
