import Ember from 'ember';

export default Ember.Component.extend({
  clickLat: 0,
  clickLng: 0,
  lat: 45.52982577726017,
  lng: -122.69130210876466,
  zoom: 14,
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

        // label: "B",
        // icon: '/img/donkeykong-sm.png',
        // animation: google.maps.Animation.DROP,
        // infowindow: {
        //   content: "<p>yeaah</p>",
        //   visible: true
        // },
        // clickable: true,
        // crossOnDrag: true,
        // cursor: 'pointer',
        // draggable: true,
        // optimized: true,
        // visible: true,
        // zIndex: 999,
        // click: function(event, marker) {
        //   this.infowindow.open(bidmap, marker);
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
  //  console.log(this.get('allMarkers'));
  },
  actions: {
    showMap() {
      this.toggleProperty('refresh');
    },
  },
});
