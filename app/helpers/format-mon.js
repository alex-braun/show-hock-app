import Ember from 'ember';
import moment from 'moment';

export function formatMon(params/*, hash*/) {
  return moment.utc(params.toString()).format('MMM');
}

export default Ember.Helper.helper(formatMon);
