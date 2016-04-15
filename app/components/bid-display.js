import Ember from 'ember';

export default Ember.Component.extend({
  // markers: [
  //   {
  //     lat: this.get('bid').latitude,
  //     lng: this.get('bid').longitude
  //   }
  // ],
  bidCircle: Ember.computed('bid.id', 'bid.latitude', 'bid.longitude', function() {
    return {
      id: this.get('bid.id'),         // Recommended
      lat: this.get('bid.latitude'),  // Required
      lng: this.get('bid.longitude'),        // Required
      radius: 5000,
      clickable: true,
      draggable: true,
      editable: true,
      fillColor: '#eee',
      fillOpacity: 0.3,
      strokeColor: '#ddd',
      strokeOpacity: 0.3,
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
    }
  }
});
