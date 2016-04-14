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
    console.log("these are bids", (this.get('bids')));
    var postedMarkers = this.get('postedMarkers');
    for (var i = 0; i< postedMarkers.get('length'); i++) {
      console.log("lat: ", postedMarkers[i].get('lat'));
      var marker = {
        lat: postedMarkers[i].get('lat'),
        lng: postedMarkers[i].get('lng'),
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
    console.log(this.get('allMarkers'));
  },
  actions: {
    showMap() {
      this.toggleProperty('refresh');
    },
  },
});
