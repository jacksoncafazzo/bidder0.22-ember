import Ember from 'ember';

export default Ember.Component.extend({
  email: Ember.computed('session.currentUser.email', function () {
    return this.get('session.currentUser.email');
  }),
  actions: {
    save1() {
      var params = {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        phone: this.get('phone'),
        email: this.email
      };
      this.sendAction('save2', params);
    }
  }
});
