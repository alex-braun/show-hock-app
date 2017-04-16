import Ember from 'ember';

export default Ember.Controller.extend({

  accessArtistParams: Ember.inject.service(),

  queryParams: ['page'],
  page: 'page',

});
