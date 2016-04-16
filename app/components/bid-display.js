import Ember from 'ember';

const { get } = Ember;

export default Ember.Component.extend({
  bidCircle: Ember.computed('bid.id', 'bid.latitude', 'bid.longitude', function() {
    return {
      id: this.get('bid.id'),         // Recommended
      lat: this.get('bid.latitude'),  // Required
      lng: this.get('bid.longitude'),        // Required
      radius: 700,
      clickable: true,
      draggable: true,
      editable: true,
      fillColor: '#D32F2F',
      fillOpacity: 0.3,
      strokeColor: '#D32F2F',
      strokeOpacity: 0.7,
      strokePosition: google.maps.StrokePosition.CENTER, // INSIDE | OUTSIDE
      strokeWeight: 3,
      visible: true,
      zIndex: 999          // Required (meters)
    };
  }),
  gmap: Ember.inject.service('g-map'),
  init() {
    this._super();
    var bidCircle = this.get('bidCircle');
    console.log(bidCircle);
    this.get('circles').push(bidCircle);
    console.log(this.get('circles'));
  },
  circles: Ember.A([]),
  actions: {
    deactivateBid(bid) {
      this.sendAction('deactivateBid', bid);
    },
    activateBid(bid) {
      this.sendAction('activateBid', bid);
    },
    contact(bidder) {
      console.log(bidder);
      var uid = get(bidder,'id');
      this.transitionTo('bidder', bidder.id);
    }
  }
});
