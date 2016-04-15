import Ember from 'ember';

// const {RSVP: {Promise}} = Ember;

export default Ember.Route.extend({
  model() {
    var uid = this.get('session.uid');
    // console.log(uid);
    return this.store.query('user', {
      orderBy: 'uid',
      equalTo: uid,
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

  }



});
