import Ember from 'ember';
import moment from 'moment';

export function formatYear(params/*, hash*/) {
  return moment.utc(params.toString()).year();
}

export default Ember.Helper.helper(formatYear);
