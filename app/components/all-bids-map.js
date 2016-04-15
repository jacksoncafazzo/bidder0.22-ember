import Ember from 'ember';

export default Ember.Component.extend({
  clickLat: 0,
  clickLng: 0,
  lat: 45.52982577726017,
  lng: -122.69130210876466,
  zoom: 12,
  mapCanvas: {},
  allMarkers: Ember.A([]),
  showMap: false,

  gmap: Ember.inject.service('g-map'),
  init() {
    this._super();
    var myMarkers = this.get('postedMarkers').map(function(marker) {
      return marker;
    });

    var myBids = this.get('bids').map(function(bid) {
      return bid;
    });

    var postedMarkers = this.get('postedMarkers');

    for (var i = 0; i< myMarkers.get('length'); i++) {
      var marker = {
        lat: myMarkers[i].get('lat'),
        lng: myMarkers[i].get('lng'),
        icon: '/img/bid-icon-new.png',
        animation: google.maps.Animation.DROP,
        infoWindow: {
            content: '<p>' + myMarkers[i].get("bid.title") + '</p>',
            visible: true
          },
          click: function(event, marker) {},
          rightclick: function(event, marker) {},
          dblclick: function(event, marker) {},
          mouseover: function(event, marker) {},
          mouseout: function(event, marker) {},
          mouseup: function(event, marker) {},
          mousedown: function(event, marker) {},
          drag: function(e, marker) {},
          dragstart: function(e, marker) {},
          dragend: function(e, marker) {}
      };
      this.get('allMarkers').push(marker);
    };
    this.set('zoom', 10);
  },
  actions: {
    showMap() {
      this.toggleProperty('refresh');
    },
  },
});
