import Ember from 'ember';

export default Ember.Route.extend({
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
    else{
      return users.get('firstObject');
    }
  },
  model() {
    var uid = this.get('session.uid');
    // var user = this.canHasNewUser();
    console.log("usertown",this.get('user.bidder'));
    return Ember.RSVP.hash({
      user: this.store.query('user', {
        orderBy: 'uid',
        equalTo: uid
      }),
      bidder: this.store.query('bidder', {
        orderBy: 'uid',
        equalTo: uid
      })
    });
  },
  actions: {

    postBid(params) {
      var newBid = this.store.createRecord('bid', params);
      var bidder = params.bidder;
      // console.log(params);
      bidder.get('bids').addObject(newBid);
      newBid.save().then(function() {
        return bidder.save();
      });
      this.transitionTo('bidder', params.bidder.uid);
    },
    saveUser() {
      console.log("yeah");
    }

  }
});
