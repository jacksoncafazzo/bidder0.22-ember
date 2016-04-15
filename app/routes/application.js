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
    console.log(bidder);
    return bidder;
  },
  beforeModel(){
    return get(this,'session').fetch().catch(function(){});
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
