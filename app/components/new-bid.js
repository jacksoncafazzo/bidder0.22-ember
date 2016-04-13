import Ember from 'ember';

export default Ember.Component.extend({
  categoryShow: false,
  showNewBidForm: false,
  actions: {
    showCategories() {
      this.toggleProperty('categoryShow');
    },
    showBidForm() {
      this.set('showNewBidForm', true);
    },
    postBid() {
      var params = {
        category: this.get('category'),
        title: this.get('title'),
        location: this.get('location'),
        payment: this.get('payment'),
        providing: this.get('providing'),
        description: this.get('description'),
        jobStart: this.get('jobStart'),
        jobEnd: this.get('jobEnd'),
        bidder: this.get('bidder')
      };
      console.log(params.bidder);
      this.sendAction('postBid', params);
      this.set('categoryShow', false);
      this.set('showNewBidForm', false);
    }
  }
});
