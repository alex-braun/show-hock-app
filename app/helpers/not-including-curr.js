import Ember from 'ember';

export function notIncludingCurr(params/*, hash*/) {
  return params - 1;
}

export default Ember.Helper.helper(notIncludingCurr);

// import Ember from 'ember';
//
// export function arrLast(params) {
//
//   return (params[0]-1) === params[1];
// }
//
// export default Ember.Helper.helper(arrLast);
