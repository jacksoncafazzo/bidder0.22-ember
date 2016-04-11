import Ember from 'ember';

export default Ember.Component.extend({
  lat: 45.52982577726017,
  lng: -122.69130210876466,
  zoom: 15,
  gMap: Ember.inject.service(),

  markers: Ember.A([
    {
      // id: 'unique-id',        // Recommended
      lat: 32.75494243654723, // Required
      lng: -86.8359375,       // Required
      // click: function(event, marker) {},
      // rightclick: function(event, marker) {},
      // dblclick: function(event, marker) {},
      // mouseover: function(event, marker) {},
      // mouseout: function(event, marker) {},
      // mouseup: function(event, marker) {},
      // mousedown: function(event, marker) {},
      // drag: function(event, marker) {},
      // dragstart: function(event, marker) {},
      // dragend: function(event, marker) {},
      // anchorPoint: new google.maps.Point(),
      // animation: google.maps.Animation.DROP,
      // attribution: new google.maps.Attribution(),
      clickable: true,
      crossOnDrag: true,
      cursor: 'pointer',
      draggable: true,
      // icon: 'beachflag-8f33bab9b0c154462489b35140f29fae.png',
      // label: 'A',
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
  actions: {
    bid(event) {
      var map = this.get('gMap');
      map = map.maps.select('bidmap');

      // var marker = this.map.Marker({
      //   position: {
      //     lat: event.latLng.lat,
      //     lng: event.latLng.lng()
      //   },
      //   map: this.map,
      //   title: "Bid of Marvels"
      // });

      console.log(map);
    }
  },

});
