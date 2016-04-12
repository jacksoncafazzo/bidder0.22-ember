import Ember from 'ember';

export default Ember.Component.extend({

  // initialize() {
  //   this.mapCanvas = new this.map.maps.Map(document.getElementById("bid-map"));
  //   this.mapCanvas.setCenter(new this.map.maps.LatLng(this.lat,this.lng));
  //   this.mapCanvas.setZoom(15);
  //   this.mapCanvas.setMapTypeId(this.map.maps.MapTypeId.ROADMAP);
  // },
  beforeModel() {
    // this.map.maps.event.addDomListener(window, "load", this.initialize);
  },
  lat: 45.52982577726017,
  lng: -122.69130210876466,
  zoom: 15,
  mapCanvas: {},
  markers: Ember.A([
    {
      lat: 42,
      lng: -122,

    }
  ]),
  showMap: false,
  gmap: Ember.inject.service('g-map'),
  actions: {
    showMap() {
      this.set('showMap', true);
    },
    placeMarker(event) {
      // make the infowindow with bid info-- we made it already. user chooses what bid to add to the infowindow?
      if (this.markers.length === 1) {
        var marker = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
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
          //get google api in here for these
          // anchorPoint: new google.maps.Point(),
          // animation: google.maps.Animation.DROP,
          // attribution: new google.maps.Attribution(),
          // place: new google.maps.MarkerPlace(),
          // position: new google.maps.LatLng(),
          // shape: new google.maps.MarkerShape(),
        };
        console.log("haaay", marker);

        this.markers.addObject(marker);
      }

    }
  },

});
