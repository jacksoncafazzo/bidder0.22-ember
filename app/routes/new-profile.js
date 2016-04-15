import Ember from 'ember';

export default Ember.Route.extend({
  canHasNewUser() {
    var uid = this.get('session.uid');
    var username = this.get('session.currentUser.displayName');
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
  actions: {
    saveProfile(params) {
      var uid = this.get('session.uid');
      var user = this.canHasNewUser(uid);
      params['user'] = user;
      params['uid'] = uid;
      console.log(params['user']);
      var newBidder = this.store.createRecord('bidder', params);
      newBidder.save();
      this.transitionTo('bidder', newBidder.id);
    },
  }
});
