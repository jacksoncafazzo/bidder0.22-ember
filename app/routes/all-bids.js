import Ember from 'ember';

export default Ember.Route.extend({
  markers: [],
  model() {
    var bids = this.store.query('bid', {
      orderBy: 'active',
      equalTo: true
    });

    var markers = this.store.findAll('marker');
    console.log(markers);
    markers.forEach(function(marker) {
      this.markers.push(marker);
    });
    return Ember.RSVP.hash({
      markers: markers,
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
