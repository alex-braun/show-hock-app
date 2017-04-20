import Ember from 'ember';

export function sum(params/*, hash*/) {
  return params[0] + params[1];
}

export default Ember.Helper.helper(sum);
