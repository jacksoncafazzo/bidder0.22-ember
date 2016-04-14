import Ember from 'ember';

export default Ember.Route.extend({

  markers: [

  ],
  model(params) {
      return this.store.findRecord('bidder', params.bidder_id);
  },
  actions: {
    postBid(params) {
      var newBid = this.store.createRecord('bid', params);
      var bidder = params.bidder;
      bidder.get('bids').addObject(newBid);
      newBid.save().then(function() {
        return bidder.save();
      });
      this.transitionTo('index');
    },
    createMarker(marker) {
      this.markers.push(marker);
      // console.log(this.markers);
    }
  }
});
