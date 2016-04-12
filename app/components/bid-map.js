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
      id: 'unique-id',        // Recommended
      lat: 32.75494243654723, // Required
      lng: -86.8359375,       // Required
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
      // anchorPoint: new google.maps.Point(),
      // animation: google.maps.Animation.DROP,
      // attribution: new google.maps.Attribution(),
      clickable: true,
      crossOnDrag: true,
      cursor: 'pointer',
      draggable: true,
      // icon: 'beachflag-8f33bab9b0c154462489b35140f29fae.png',
      label: 'A',
      opacity: 0.3,
      optimized: true,
      // place: new google.maps.MarkerPlace(),
      // position: new google.maps.LatLng(),
      // shape: new google.maps.MarkerShape(),
      title: 'string',
      visible: true,
      zIndex: 999
    }
  ]),
  showMap: false,
  gmap: Ember.inject.service('g-map'),
  actions: {
    showMap() {
      this.set('showMap', true);
    },
    bid(event) {
      var gmap = this.get('gmap');
      var map = gmap.maps.select('bidmap');
      console.log(map);
      var marker = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        label: "Bid of Marvels",
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
        clickable: true,
        crossOnDrag: true,
        cursor: 'pointer',
        draggable: true
      };
      console.log("haaay", marker);
      this.markers.addObject(marker);
    }
  },

});
