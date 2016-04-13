import Ember from 'ember';

export default Ember.Component.extend({
  marker: {

  },
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
      var marker = this.marker;
      var params = {
        category: this.get('category'),
        title: this.get('title'),
        location: this.get('location'),
        payment: this.get('payment'),
        providing: this.get('providing'),
        description: this.get('description'),
        jobStart: this.get('jobStart'),
        jobEnd: this.get('jobEnd'),
        bidder: this.get('bidder'),
        marker: this.get(this.marker)
      };
      console.log(marker);
      this.sendAction('postBid', params);
      this.set('categoryShow', false);
      this.set('showNewBidForm', false);
    },
    createMarker(marker) {
      this.set('marker', marker);
      console.log("here is marker", this.marker);
      // this.sendAction('createMarker', marker);
    }
  }
});
