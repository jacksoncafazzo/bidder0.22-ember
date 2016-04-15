import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sign-up');
  this.route('sign-in');
  this.route('about');
  this.authenticatedRoute('bidder', {path: '/bidder/:bidder_id'});
  this.authenticatedRoute('bid', {path: '/bid/:bid_id'});
  this.authenticatedRoute('all-bids');
  this.authenticatedRoute('new-profile');
});

export default Router;
