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
    this.get('circles').push(bidCircle);
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
      this.transitionTo('bidder', bidder.id);
    }
  }
});
