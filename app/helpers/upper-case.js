import Ember from 'ember';

export function upperCase(params/*, hash*/) {
  return params.toString().toUpperCase();
}

export default Ember.Helper.helper(upperCase);
