import Ember from 'ember';

export default Ember.Route.extend({
  userId: "",
  model(params) {
    this.userId = params.bidder_id;
    return this.store.findRecord('bidder', params.bidder_id);
  },
  actions: {
    postBid(params) {
      var profile = this.store.findRecord('bidder', this.userId);
      console.log(profile);
      params['bidder'] = profile;
      console.log(params);
      var newBid = this.store.createRecord('bid', params);
      newBid.save();
      this.transitionTo('bid', params.bidder);
    }
  }
});
