import Ember from 'ember';

export default Ember.Component.extend({
  // markers: [
  //   {
  //     lat: this.get('bid').latitude,
  //     lng: this.get('bid').longitude
  //   }
  // ],
  actions: {
    deactivateBid(bid) {
      this.sendAction('deactivateBid', bid);
    },
    activateBid(bid) {
      this.sendAction('activateBid', bid);
    }
  }
});
