import Ember from 'ember';

export default Ember.Route.extend({
  // markers: [],
  model() {
    var bids = this.store.query('bid', {
      orderBy: 'active',
      equalTo: true
    });

    return this.store.findAll('marker').then(function(markers) {
      // console.log("I'm here" , markers);
      var markersList = [];
      markers.forEach(function(marker) {
        markersList.push(marker);
      });
      return Ember.RSVP.hash({
        postedMarkers: markersList,
        bids: bids
      });
    });
  },
  actions: {
    createMarker(marker) {
      this.markers.push(marker);
      // console.log(this.markers);
    }
  }
});
