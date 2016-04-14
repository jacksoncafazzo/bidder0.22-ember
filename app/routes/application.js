import Ember from 'ember';

const {get} = Ember;


export default Ember.Route.extend({
  getUser(uid) {
    var user = this.store.query('user', {
      orderBy: 'uid',
      equalTo: uid,
    });
    console.log("first user", user);
    return user;
  },
  getBidder(user) {
    var bidder = this.store.query('bidder', {
      orderBy: 'uid',
      equalTo: user.uid,
      startAt: 0,
      endAt: 1
    });
    return bidder;
  },
  beforeModel(){
    return get(this,'session').fetch().catch(function(){});
  },
  // model() {
  //   var uid = this.get('session.uid');
  //   // var uid = this.get('session.uid');
  //   var user = this.getUser(uid);
  //   console.log(user);
  //   // console.log(this.get('user'));
  //   var bidder = this.getBidder(user);
  //   // console.log("bidders", bidder);
  //   return Ember.RSVP.hash({
  //     user: user,
  //     bidder: bidder
  //   });
  // },
  actions:{
    login(){
      get(this,'session').open('firebase', { provider: 'twitter'}).then(function(data) {
        console.log(data);
      });
    },
    logout(){
      get(this,'session').close();
      this.transitionTo('/');
    },
    accessDenied() {
      this.transitionTo('/');
    }
  }
});
