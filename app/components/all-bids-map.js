import Ember from 'ember';

export default Ember.Component.extend({
  clickLat: 0,
  clickLng: 0,
  lat: 45.52982577726017,
  lng: -122.69130210876466,
  zoom: 14,
  mapCanvas: {},
  // placedMarkers: Ember.computed('markers', function(markers) {
  //   console.log(this.get('markers'));
  //   this.set('markers', markers);
  //   return markers;
  // }),
  allMarkers: Ember.A([
    {
      lat: 42,
      lng: -122,

    },
    {
      lat: 45,
      lng: -122
    }
  ]),
  showMap: false,
  gmap: Ember.inject.service('g-map'),
  actions: {
    // testFunction() {
    //   var placedMarkers = this.get('postedMarkers');
    //   console.log(placedMarkers.get('marker').content());
    //   var newMarkers = Ember.A([]);
    //   placedMarkers.forEach(function(marker){
    //     console.log(marker.lat);
    //     var newMarker = {
    //       lat: marker.lat,
    //       lng: marker.lng
    //     };
    //     newMarkers.push(newMarker);
    //   }, this);
    //   bids.forEach(function(bid) {
    //     bid = this.get(bid);
    //     console.log(bid.latitude);
    //     // console.log(this.get('clickLat'));
    //     var marker = {
    //       lat: bid.latitude,
    //       lng: bid.longitude,
    //     };
    //     // console.log(marker);
    //     // this.markers.pushObject(marker)
    //   });
    // },
    showMap() {
      this.toggleProperty('refresh');

    },
    placeBidMarkers(event) {
      console.log("these are bids", (this.get('bids')));
      // // make the infowindow with bid info-- we made it already. user chooses what bid to add to the infowindow?
      var postedMarkers = this.get('postedMarkers');
      // var allMarkers = [];
      for (var i = 0; i< postedMarkers.get('length'); i++) {
        console.log("lat: ", postedMarkers[i].get('lat'));
        var marker = {
          lat: postedMarkers[i].get('lat'),
          lng: postedMarkers[i].get('lng'),
          // label: "B",
          // icon: '/img/donkeykong-sm.png',
          // animation: google.maps.Animation.DROP,
          // infowindow: {
          //   content: "yeaah"
          // },
          // clickable: true,
          // crossOnDrag: true,
          // cursor: 'pointer',
          // draggable: true,
          // optimized: true,
          // visible: true,
          // zIndex: 999,
          // click: function(event, marker) {
          //   infowindow.open(bidmap, marker);
          // },
          // rightclick: function(event, marker) {},
          // dblclick: function(event, marker) {},
          // mouseover: function(event, marker) {},
          // mouseout: function(event, marker) {},
          // mouseup: function(event, marker) {},
          // mousedown: function(event, marker) {},
          // drag: function(event, marker) {},
          // dragstart: function(event, marker) {},
          // dragend: function(event, marker) {},
        };
        this.get('allMarkers').push(marker);
      };
      console.log(this.get('allMarkers'));
   }
  },
});
