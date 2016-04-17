import Ember from 'ember';

const {get,set} = Ember;

export default Ember.Route.extend({
  // getUser(uid) {
  //   var user = this.store.query('user', {
  //     orderBy: 'uid',
  //     equalTo: uid,
  //   });
  //   console.log("first user", user);
  //   return user;
  // },
  // getBidder(user) {
  //   var bidder = this.store.query('bidder', {
  //
  //     orderBy: 'uid',
  //     equalTo: user.uid,
  //     startAt: 0,
  //     endAt: 1
  //
  //   });
  //   console.log(bidder);
  //   return bidder;
  // },

  // beforeModel(){
  //   return get(this,'session').fetch().catch(function(){
  //   });
  // },
  hasFacebook: false,
  hasTwitter: false,
  actions:{
    loginTwitter(){
      get(this,'session').open('firebase', { provider: 'twitter'}).then(function(data) {

        console.log(data);
        console.log("u has twitter");
      });
      // this.transitionTo('all-bids');
    },
    loginFacebook(){
      get(this,'session').open('firebase', { provider: 'facebook'}).then(function(data) {
        set(this,'hasFacebook', true);
        console.log(data);
        console.log("u has facebook", get(this,'hasFacebook'));
        // this.transitionTo('all-bids');
      });
    },
    logout(){
      get(this,'session').close();
      this.transitionTo('/');
    },
    accessDenied() {
      this.transitionTo('/');
    },
    signOut() {
      get(this,'session').close();
      this.transitionToRoute('/');
    }
  }
});
