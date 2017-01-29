import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('artist', function() {
    this.route('results');
    this.route('search', function() {
      this.route('results');
    });
  });
  this.route('region', function() {
    this.route('search', function() {
      this.route('results');
    });
    this.route('results');
  });
  this.route('event-search');
});

export default Router;
