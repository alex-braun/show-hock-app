import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('artist', function() {
    this.route('search', function() {
      this.route('results', { path: '/:artist_name/results' });
    });
    this.route('event', { path: '/event/:artist_name/:artist_id' }, function() {
      this.route('results');
      this.route('concert', { path: '/concert/:concert_id' });
    });
  });
  this.route('region', function() {
    this.route('search', function() {
      this.route('results', { path: '/:region_name/results' });
    });
    this.route('event', function() {
      this.route('results', { path: '/:region_id/results' });
      });
    });
  this.route('venue', function() {
    this.route('search', function() {
      this.route('results', { path: '/:venue_name/results' });
    });
    this.route('event', { path: '/event/:venue_id' }, function() {
      this.route('results');
      this.route('concert', { path: '/concert/:concert_id' });
    });
  });

  this.route('event-search');
});

export default Router;
