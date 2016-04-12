import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveProfile(params) {
      params['email'] = this.get('session.currentUser.email');
      var newProfile = this.store.createRecord('bidder', params);
      newProfile.save();
      this.transitionTo('bidder', newProfile);
    }
  }

});
