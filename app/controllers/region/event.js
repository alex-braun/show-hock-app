import Ember from 'ember';

export default Ember.Controller.extend({
  count: Ember.inject.service('access-artist-show-count'),

});
