import Ember from 'ember';

export default Ember.Component.extend({
  clickLat: 0,
  clickLng: 0,
  // showPosition: Ember.computed('clickLat', 'clickLng', function() {
  //   return this.get('clickLat'), this.get('clickLng');
  // }),

  // initialize() {
  //   this.mapCanvas = new this.map.maps.Map(document.getElementById("bid-map"));
  //   this.mapCanvas.setCenter(new this.map.maps.LatLng(this.lat,this.lng));
  //   this.mapCanvas.setZoom(15);
  //   this.mapCanvas.setMapTypeId(this.map.maps.MapTypeId.ROADMAP);
  // },

  lat: 45.52982577726017,
  lng: -122.69130210876466,
  zoom: 15,
  mapCanvas: {},
  placedMarker: Ember.computed('markers', function() {
    return this.get.indexOf('markers', 0);
  }),
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
          //get google api in here for these
          // anchorPoint: new google.maps.Point(),
          // animation: google.maps.Animation.DROP,
          // attribution: new google.maps.Attribution(),
          // place: new google.maps.MarkerPlace(),
          // position: new google.maps.LatLng(),
          // shape: new google.maps.MarkerShape(),
        };
        // console.log("haaay", marker);

        this.markers.addObject(marker);
        this.sendAction('createMarker', marker);
      }

    }
  },

});
