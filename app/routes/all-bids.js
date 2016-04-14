import Ember from 'ember';

export default Ember.Route.extend({
  markers: [],
  model() {
    var bids = this.store.query('bid', {
      orderBy: 'active',
      equalTo: true
    });

    var postedMarkers = this.store.findAll('marker');
    console.log(postedMarkers);
    postedMarkers.forEach(function(marker) {
      this.markers.push(marker);
    });
    return Ember.RSVP.hash({
      postedMarkers: postedMarkers,
      bids: bids
    });
  },
  actions: {
    createMarker(marker) {
      this.markers.push(marker);
      // console.log(this.markers);
    }
  }
});
