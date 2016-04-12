import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
      var params = {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        phone: this.get('phone'),
      };
      this.sendAction('save2', params);
    }
  }
});
