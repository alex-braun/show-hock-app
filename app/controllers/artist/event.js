import Ember from 'ember';

export default Ember.Controller.extend({

name: Ember.inject.service('access-artist-data'),

});
