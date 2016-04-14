import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateProfile: false,
  actions: {
    showUpdateProfile() {
      this.toggleProperty('showUpdateProfile');
    }
  }
});
