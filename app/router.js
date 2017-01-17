import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('artist-search', function() {
    this.route('results');
  });
  this.route('artist');
  this.route('region-search', function() {
    this.route('results');
  });
  this.route('region');
});

export default Router;
