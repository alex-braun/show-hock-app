import Ember from 'ember';

export default Ember.Controller.extend({

  accessArtistParams: Ember.inject.service(),
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  queryParams: ['page'],
  page: 'page',

});
