import Ember from 'ember';

const {get} = Ember;

export default Ember.Route.extend({
  model(params) {

    var provider = get(this,'session.provider');
    var whoU = {};
    if (provider === "twitter") {
      whoU['hasTwitter']= true;
      whoU['hasFacebook']= false;
    }
    if (provider === "facebook") {
      whoU['hasFacebook']= true;
      whoU['hasTwitter']= false;
    }
  return Ember.RSVP.hash({
    bid: this.store.findRecord('bid', params.bid_id),
    whoU: whoU
  });
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
  },
  postMessage(params) {
    var newMessage = this.store.createRecord('message', params);
    var bid = params.bid;
    bid.get('messages').addObject(newMessage);
    newMessage.save().then(function() {
      return bid.save();
    });
    this.set('message', "");
    this.transitionTo('bid', params.bid);
  }
}
});
