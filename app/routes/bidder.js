import Ember from 'ember';

export default Ember.Route.extend({
  userId: "",

  model(params) {
    this.userId = params.bidder_id;
    return this.store.findRecord('bidder', params.bidder_id);
  },
  actions: {

    postBid(params) {
      var newBid = this.store.createRecord('bid', params);
      var bidder = params.bidder;
      console.log(params);
      bidder.get('bids').addObject(newBid);
      newBid.save().then(function() {
        return bidder.save();
      });
      this.transitionTo('bidder', params.bidder);
    },

  }
});
