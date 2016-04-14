import Ember from 'ember';

const {get} = Ember;


export default Ember.Route.extend({
  getUser(uid) {
    var user = this.store.query('user', {
      orderBy: 'uid',
      equalTo: uid,
    });
    return user;
  },
  getBidder(user) {
    var bidder = this.store.query('bidder', {
      orderBy: 'user',
      equalTo: user.id,
      startAt: 0,
      endAt: 1

    });
    console.log(bidder);
    return bidder;
  },
  beforeModel(){
    return get(this,'session').fetch().catch(function(){});
  },
  model() {
    var uid = this.get('session.uid');
    // var uid = this.get('session.uid');
    var user = this.getUser(uid);

    // console.log(this.get('user'));
    var bidder = this.getBidder(user);
    // console.log("bidders", bidder);
    return Ember.RSVP.hash({
      user: user,
      bidder: bidder
    });
  },
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
