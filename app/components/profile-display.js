import Ember from 'ember';


export default Ember.Component.extend({
  actions: {
    goToBidder(bidder) {
      var params = {
        id: 1234
      };

      this.sendAction('goToBidder', params, bidder);
    }
  }
});
