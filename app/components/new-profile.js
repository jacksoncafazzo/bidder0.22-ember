import Ember from 'ember';

export default Ember.Component.extend({
  // model(params) {
  //   return this.store('bidder', params.bidder_id);
  // },
  
  actions: {
    saveProfile() {
      var params = {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        phone: this.get('phone')
      };
      this.sendAction('saveProfile', params);
    }
  }
});
