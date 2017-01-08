import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  // rootURL: config.rootURL
});

Router.map(function() {
  this.route('artistsearches', function() {
    this.route('results');
  });
  this.route('artists');
});

export default Router;
