import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  // rootURL: config.rootURL
});

Router.map(function() {
  this.route('artistsearch', function() {
    this.route('results');
  });
  this.route('artist');
  this.route('regionsearch', function() {
    this.route('results');
  });
  this.route('region');
});

export default Router;
