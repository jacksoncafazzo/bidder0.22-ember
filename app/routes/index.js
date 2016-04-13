import Ember from 'ember';

// const {RSVP: {Promise}} = Ember;

export default Ember.Route.extend({
  model() {
  // var uid = this.get('session.uid');
  // var damodel = this.store.query('bidder', {
  //   equalTo: uid,
  //   // orderBy: uid
  // });
  // console.log(damodel);
  // return damodel;
  console.log(this.get('session'));
  },
  actions: {
    saveProfile(params) {
      var uid = this.get('session.uid');
      var username = this.get('session.currentUser.username');
      var avatar = this.get('session.currentUser.profileImageURL');
      // new Promise((resolve)=>{
      var user = {};
      var users = this.store.query('user', {orderBy: 'uid', equalTo: uid });
      if(users.get('length') === 0){
        user = this.store.createRecord('user',{
          uid: uid,
          username: username,
          avatar: avatar
        });
        user.save();
      }// end if
      else{
        users.get('firstObject');
      }// end else
      // console.log("user", user);

      params['user'] = user;
      console.log(params['user']);
      // params['uid'] = this.get('session.uid');
      var newProfile = this.store.createRecord('bidder', params);
      newProfile.save();
      this.transitionTo('bidder', newProfile);
    }
  }

});
