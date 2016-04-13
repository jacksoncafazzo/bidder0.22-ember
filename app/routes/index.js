import Ember from 'ember';

// const {RSVP: {Promise}} = Ember;

export default Ember.Route.extend({
  model() {
    var uid = this.get('session.uid');
    // var uid = this.get('session.uid');
    var user = this.getUser(uid);

    console.log(this.get('user'));
    var bidder = this.getBidder(user.bidder_id);
    // console.log(bidder);
    return Ember.RSVP.hash({
      user: user,
      bidder: bidder
    });
  },
  canHasNewUser() {
    var uid = this.get('session.uid');
    var username = this.get('session.currentUser.username');
    var avatar = this.get('session.currentUser.profileImageURL');
    var users = this.store.query('user', {orderBy: 'uid', equalTo: uid });
    if(users.get('length') === 0){
      var user = this.store.createRecord('user',{
        uid: uid,
        username: username,
        avatar: avatar
      });
      user.save();
      return user;
    }// end if
    else {
      return users.get('firstObject');
    }
  },
  getUser(uid) {
    var user = this.store.query('user', {
      orderBy: 'uid',
      equalTo: uid,
    });
    return user;
  },
  getBidder(uid) {
    var bidder = this.store.query('bidder', {
      orderBy: 'uid',
      equalTo: uid
    });
    return bidder;
  },
  actions: {
    saveProfile(params) {
      var uid = this.get('session.uid');
      var user = this.canHasNewUser(uid);
      params['user'] = user;
      // console.log(params['user']);
      var newBidder = this.store.createRecord('bidder', params);
      newBidder.save();
      this.transitionTo('index');
    },
    postBid(params) {
      var newBid = this.store.createRecord('bid', params);
      newBid['bidder'] = this.get('bidder');
      console.log(this.get('bidder'));
      // console.log(params);
      bidder.get('bids').addObject(newBid);
      newBid.save().then(function() {
        return bidder.save();
      });
      this.transitionTo('bidder', params.bidder.uid);
    },
  }



});
