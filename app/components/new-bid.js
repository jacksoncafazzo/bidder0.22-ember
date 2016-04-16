import Ember from 'ember';

export default Ember.Component.extend({
  marker: {},
  categoryShow: false,
  showNewBidForm: false,
  categories: [
    {id: 'general', title: 'General'},
    {id: 'yard', title: 'Yard/Garden'},
    {id: 'tech', title: 'Technology'},
    {id: 'house', title: 'Household'},
    {id: 'animals', title: 'Animals'},
    {id: 'education', title: 'Education'},
  ],
  actions: {
    showCategories() {
      this.toggleProperty('categoryShow');
    },
    showBidForm() {
      this.set('showNewBidForm', true);
    },
    postBid() {
      // var marker = this.marker;
      var markerParams = {
        lat: this.marker.lat,
        lng: this.marker.lng,
        draggable: false,
        cursor: "pointer"
      };
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
        latitude: this.marker.lat,
        longitude: this.marker.lng
      };
      // console.log(marker);
      this.sendAction('postBid', params, markerParams);
      this.set('categoryShow', false);
      this.set('showNewBidForm', false);
    },
    createMarker(marker) {
      this.set('marker', marker);
      console.log("you made a marker", this.marker);
      // this.sendAction('createMarker', marker);
    }
  }
});
