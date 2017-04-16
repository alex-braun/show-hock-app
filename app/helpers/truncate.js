import Ember from 'ember';

export function truncate(params/*, hash*/) {

  let str = params[0].toString();
  let arg = parseInt(params[1]);
  if (str.length < arg) {
    return str;
  }
  return str.substr(0, arg-1) + '...';
}

export default Ember.Helper.helper(truncate);
