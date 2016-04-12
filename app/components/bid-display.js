import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    deactivateBid(bid) {
      this.sendAction('deactivateBid', bid)
    },
    activateBid(bid) {
      this.sendAction('activateBid', bid)
    }
  }
});
