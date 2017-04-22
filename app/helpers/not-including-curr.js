import Ember from 'ember';

export function notIncludingCurr(params/*, hash*/) {
  return params - 1;
}

export default Ember.Helper.helper(notIncludingCurr);
