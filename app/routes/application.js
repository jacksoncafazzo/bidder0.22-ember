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
  hasFacebook: false,
  hasTwitter: false,
  actions:{
    loginTwitter(){
      get(this,'session').open('firebase', { provider: 'twitter'}).then(function(data) {
        this.set('hasFacebook', true);
        console.log(data);
      });
    },
    loginFacebook(){
      get(this,'session').open('firebase', { provider: 'facebook'}).then(function(data) {
        this.set('hasTwitter', true);
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
