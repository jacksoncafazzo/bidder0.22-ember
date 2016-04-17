import Ember from 'ember';


export default Ember.Route.extend({
  markers: [

  ],
  model(params) {
      return this.store.findRecord('bidder', params.bidder_id);
  },
  actions: {

    updateProfile(bidder, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          bidder.set(key,params[key]);
        }
      });
      bidder.save();
      console.log(params);
      this.transitionTo('bidder', bidder);

    },
    postBid(params) {
      // var marker = this.store.createRecord('marker', markerParams);
      // marker.save();
      // params['marker'] = marker;
      var newBid = this.store.createRecord('bid', params);
      // marker['bid'] = newBid;
      // console.log(newBid);
      var bidder = params.bidder;
      bidder.get('bids').addObject(newBid);
      newBid.save().then(function() {
        return bidder.save();
      });

      this.transitionTo('bidder', params.bidder);

    },
    createMarker(marker) {
      this.markers.push(marker);
      // console.log(this.markers);
    },
    goToBidder(params, bidder) {
      console.log(bidder);
      this.transitionTo('bidder', bidder);
    }
  }
});
