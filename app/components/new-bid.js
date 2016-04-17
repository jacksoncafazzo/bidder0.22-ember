import Ember from 'ember';


export default Ember.Component.extend({
  marker: {},
  categoryShow: false,
  showNewBidForm: false,
  markerLat: 42,
  markerLng: -126,
  categories: [
    {id: 'general', title: 'General'},
    {id: 'yard', title: 'Yard/Garden'},
    {id: 'tech', title: 'Technology'},
    {id: 'house', title: 'Household'},
    {id: 'animals', title: 'Animals'},
    {id: 'education', title: 'Education'},
  ],
  providing: [
    {id: 'service', title: 'Providing service'},
    {id: 'seeking', title: 'Seeking service'},
    {id: 'item', title: 'Selling item'},
    {id: 'wanted', title: 'Seeking item'}
  ],
  actions: {
    showCategories() {
      this.toggleProperty('categoryShow');
    },
    showBidForm() {
      this.toggleProperty('showNewBidForm');
    },
    postBid() {
      // var marker = this.marker;
      // var markerParams = {
      //   lat: this.marker.lat,
      //   lng: this.marker.lng,
      //   draggable: false,
      //   cursor: "pointer"
      // };
      console.log(this.get('bidder.uid'));
      var params = {
        uid: this.get('bidder.uid'),
        category: this.get('category'),
        title: this.get('title'),
        location: this.get('location'),
        payment: this.get('payment'),
        providing: this.get('provided'),
        description: this.get('description'),
        jobStart: this.get('jobStart'),
        startTime: this.get('startTime'),
        jobEnd: this.get('jobEnd'),
        endTime: this.get('endTime'),
        bidder: this.get('bidder'),
        latitude: this.marker.lat,
        longitude: this.marker.lng
      };
      // console.log(marker);
      this.sendAction('postBid', params);
      this.set('categoryShow', false);
      this.set('showNewBidForm', false);
    },
    createMarker(marker) {
      marker['drag'] = function(event, marker) {
        console.log(marker);
      };
      marker['dragstart'] = function(event, marker) {
        console.log('u dragon');
      };
      marker['dragend'] = function(event, marker) {
        console.log("lol", event, marker);
      };
      marker['click'] = function(event, marker) {
        this.set('marker', marker);
      };

      this.set('marker', marker);
      console.log("you made a marker", this.marker);
      // this.sendAction('createMarker', marker);
    }
  }
});
