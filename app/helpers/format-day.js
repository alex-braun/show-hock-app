import Ember from 'ember';
import moment from 'moment';

export function formatDay(params/*, hash*/) {
  return moment.utc(params.toString()).format("D");
}

export default Ember.Helper.helper(formatDay);
