import Ember from 'ember';

const { get } = Ember;

export default Ember.Route.extend({
  // beforeModel(){
  //   return get(this,'session').fetch().catch(function(){});
  // },
  hasFacebook: false,
  hasTwitter: false,
  model() {
    var uid = this.get('session.uid');

    var provider = this.get('session.provider');
    console.log(provider);
    if (provider === "twitter") {
      this.set('hasTwitter', true);
      console.log(this.get('hasTwitter'));
    }
    if (provider === "facebook") {
      this.set('hasFacebook', true);
      console.log("boy howdy u has facebook");
    }
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
