import Ember from 'ember';

const neq = (params) => params[0] !== params[1];


export default Ember.Helper.helper(neq);
