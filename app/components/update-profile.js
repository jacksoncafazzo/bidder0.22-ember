import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateProfile: false,
  actions: {
    showUpdateProfile() {
      this.toggleProperty('showUpdateProfile');
    },
    updateProfile(bidder) {
      console.log(bidder);
      var params = {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        phone: this.get('phone')
      }
      this.sendAction('updateProfile', bidder, params);
    }
  }
});
