import Ember from 'ember';

export function prevCurr(params/*, hash*/) {
  let arr = params[0];
  let curr = params[1];
  if (curr) {
    return arr[curr].get('state') !== arr[curr-1].get('state');
  }
  return arr[curr].get('state');
}

export default Ember.Helper.helper(prevCurr);
