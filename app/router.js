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
    this.route('event', { path: '/:artist_name/:artist_id/event' }, function() {
      this.route('results');
      this.route('concert', { path: '/concert/:concert_id' });
    });
  });
  this.route('region', function() {
    this.route('search', function() {
      this.route('results', { path: '/:region_name/results' });
    });
    this.route('event', { path: '/:region_name/:region_id/event' }, function() {
      this.route('results');
      this.route('concert', { path: '/concert/:concert_id' } );
    });
  });
  this.route('venue', function() {
    this.route('search', function() {
      this.route('results', { path: '/:venue_name/results' });
    });
    this.route('event', { path: '/:venue_id/event' }, function() {
      this.route('results');
      this.route('concert', { path: '/concert/:concert_id' });
    });
  });
  this.route('user', function() {
    this.route('change-location', function() {
      this.route('results', { path: '/:region_name/results' } );
      this.route('confirm');
    });
    this.route('calendar');
  });
  this.route('searches', function() {
    this.route('search', function() {
      this.route('results', { path: '/:search_name/results' });
    });
  });
  this.route('sign-up', function() {
    this.route('new', { path: '/new/:concert_id' });
  });
  this.route('sign-in');
  this.route('change-password');
});

export default Router;
