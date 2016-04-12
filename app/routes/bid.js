import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  return this.store.findRecord('bid', params.bid_id);
},
actions: {
  deactivateBid(bid) {
    bid.set('active', false);
    bid.save();
    this.transitionTo('bid');
  },
  activateBid(bid) {
    bid.set('active', true);
    bid.save();
    this.transitionTo('bid');
  }
}
});
