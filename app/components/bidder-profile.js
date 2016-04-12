import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['date:desc'],
  sortedBids: Ember.computed.sort('bidder.bids', 'sortBy'),

});
