import Ember from 'ember';

export function arrLast(params) {

  return (params[0]-1) === params[1];
}

export default Ember.Helper.helper(arrLast);
