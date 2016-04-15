import Ember from 'ember';

// const {RSVP: {Promise}} = Ember;

export default Ember.Route.extend({
  model() {
    var uid = this.get('session.uid');
    // console.log(uid);

    return Ember.RSVP.hash({
      bidders: this.store.query('bidder', {
        orderBy: 'uid',
        equalTo: uid
      }),
      users: this.store.query('user', {
        orderBy: 'uid',
        equalTo: uid
      })
    });
  },
  // canHasNewUser() {
  //   var uid = this.get('session.uid');
  //   var username = this.get('session.currentUser.displayName');
  //   var avatar = this.get('session.currentUser.profileImageURL');
  //   var users = this.store.query('user', {orderBy: 'uid', equalTo: uid });
  //   if(users.get('length') === 0){
  //     var user = this.store.createRecord('user',{
  //       uid: uid,
  //       username: username,
  //       avatar: avatar
  //     });
  //     user.save();
  //     return user;
  //   }// end if
  //   else {
  //     return users.get('firstObject');
  //   }
  // },
  getBidder(uid) {
    var bidder = this.store.query('bidder', {
      orderBy: 'uid',
      equalTo: uid
    });
    return bidder;
  },
  actions: {


  }



});
