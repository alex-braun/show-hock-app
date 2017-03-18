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

      // this.route('results');

    });
    this.route('event', { path: '/event/:artist_name' }, function() {
      this.route('results', { path: '/:artist_id/results' });
      this.route('concert', { path: '/concert/:concert_id' });
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
//findAll is all artists // not applicable
//findRecord is one item
//findRecord is single result.

//artist/search/metallica/results
//artist/event/metallica/331163/results?page=1
//artist/event/331163/metallica/concert/139904352
// Router.map(function () {
//   this.route('sign-up');
//   this.route('sign-in');
//   this.route('change-password');
//   this.route('users');
//   this.route('about');
//   this.route('cocktails', function() {
//    this.route('new');
//    this.route('edit', { path: '/:cocktail_id/edit' });
//  });
// });
