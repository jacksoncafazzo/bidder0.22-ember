import Ember from 'ember';

export default Ember.Route.extend({
  model() {

  },
  actions: {
    save3(params) {
      console.log(params);
      var newProfile = this.store.createRecord('myprofile', params);
      newProfile.save();
      console.log(newProfile);
      this.transitionTo('myprofile', newProfile.id);
    }
  }

});
