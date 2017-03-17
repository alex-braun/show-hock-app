import Ember from 'ember';

export function noParens(params/*, hash*/) {
  return params.toString().replace(/\s*\(.*?\)\s*/g, '');
}

export default Ember.Helper.helper(noParens);
