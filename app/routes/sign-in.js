import Ember from 'ember';

export default Ember.Route.extend({
  showNewProfile: false,
  actions: {
    save3(params) {
      var session = this.get('session');
      params['email'] = this.get('session.currentUser.email');
      console.log(params);
      var newProfile = this.store.createRecord('bidder', params);
      newProfile.save();
      session['userId'] = newProfile.id;
      console.log(session);
      
      this.transitionTo('bidder', newProfile.id);
    }
  }
});
