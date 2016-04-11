import Ember from 'ember';

export default Ember.Controller.extend({
  firebase: Ember.inject.service(),
  actions: {
    signIn(provider) {
      let controller = this;
      this.get('session').open('firebase', {
        provider: provider,
        email: this.get('email') || '',
        password: this.get('password') || '',
      }).then(() => {
        controller.set('email', null);
        controller.set('password', null);
        controller.transitionToRoute('myprofile');
      }, (error) => {
        console.log(error);
      });
    }
  }
});
