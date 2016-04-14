import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      postedMarkers: this.store.findAll('marker'),
      bids: this.store.query('bid', {
        orderBy: 'active',
        equalTo: true
      })
    });
  },
  actions: {
    createMarker(marker) {
      this.markers.push(marker);
    }
  }
});
