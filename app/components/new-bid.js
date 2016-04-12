import Ember from 'ember';

export default Ember.Component.extend({
  categoryShow: false,
  actions: {
    showCategories() {
      this.set('categoryShow', true);
    },
    postBid() {
      var params = {
        title: this.get('title'),
        payment: this.get('payment'),
        description: this.get('description'),
        jobStart: this.get('jobStart'),
        jobEnd: this.get('jobEnd'),
        bidder: this.get('bidder')
      };
      this.sendAction('postBid', params);
      this.set('categoryShow', false);
    }
  }
});
