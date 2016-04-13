import Ember from 'ember';

export default Ember.Component.extend({

  clickLat: 0,
  clickLng: 0,
  lat: 45.52982577726017,
  lng: -122.69130210876466,
  zoom: 15,
  mapCanvas: {},
  // placedMarker: Ember.computed('markers', function() {
  //   return this.get.indexOf('markers', 0);
  // }),
  markers: Ember.A([
    {
      lat: 42,
      lng: -122
    }
  ]),
  showMap: false,
  gmap: Ember.inject.service('g-map'),
  actions: {
    testFunction() {
      this.get('bids').forEach(function(bid) {
        var marker = {
          lat: bid.latitude,
          lng: bid.longitude,
        };
        console.log(marker);
        // this.markers.pushObject(marker)
      });
      console.log("these are bids length", this.get('bids'));
    },
    showMap() {
      this.set('showMap', true);
    },
    placeMarker(event) {
      // make the infowindow with bid info-- we made it already. user chooses what bid to add to the infowindow?
        this.set('clickLat', event.latLng.lat());
        this.set('clickLng', event.latLng.lng());
        var marker = {
          lat: this.clickLat,
          lng: this.clickLng,
          label: "Bid of Marvels",
          clickable: true,
          crossOnDrag: true,
          cursor: 'pointer',
          draggable: true,
          optimized: true,
          visible: true,
          zIndex: 999,
          click: function(event, marker) {},
          rightclick: function(event, marker) {},
          dblclick: function(event, marker) {},
          mouseover: function(event, marker) {},
          mouseout: function(event, marker) {},
          mouseup: function(event, marker) {},
          mousedown: function(event, marker) {},
          drag: function(event, marker) {},
          dragstart: function(event, marker) {},
          dragend: function(event, marker) {},

        };

        this.markers.addObject(marker);
        this.sendAction('createMarker', marker);
      }
    },
});
