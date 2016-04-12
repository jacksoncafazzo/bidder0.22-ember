import Ember from 'ember';

export default Ember.Controller.extend({
  beforeModel() {
    this.get('session').fetch().catch((error) => {
      console.log(error);
    });
  },
  actions: {
    signOut() {
      this.get('session').close();
      this.transitionToRoute('/');
    }
  }
});
