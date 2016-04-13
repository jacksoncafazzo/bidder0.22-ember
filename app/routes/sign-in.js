import Ember from 'ember';

export default Ember.Route.extend({
  showNewProfile: false,
  actions: {
    save3(params) {
      params['email'] = this.get('session.currentUser.email');
      console.log(params);
      var newProfile = this.store.createRecord('bidder', params);
      newProfile.save();
      this.transitionTo('bidder', newProfile.id);
    }
  }
});
