import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('artist', function() {
    this.route('search', function() {
      this.route('results');
    });
    this.route('event', function() {
      this.route('results');
      this.route('concert');
    });
  });

  this.route('region', function() {
    this.route('search', function() {
      this.route('results');
    });
    this.route('event', function() {
      this.route('results');
      });
    });

  this.route('event-search');

  this.route('concert', function() {
    this.route('event', function() {
      this.route('results');
    });
  });
});

export default Router;
