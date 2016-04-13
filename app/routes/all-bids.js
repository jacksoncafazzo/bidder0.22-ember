import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    var markers = {};
    var marker = {};
    console.log("this.model" + this.get('model'));
    for (var i=0 ; i < (this.get('model.length')); i++) {
      marker = {
        lat: bid[i].lat,
        lng: bid[i].lng,
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
      markers.push(marker);
    }
    // console.log(markers);
    return markers;
  },
  model: function() {
    var bids = this.store.query('bid', {
      orderBy: 'active',
      equalTo: true
    });
    // var markersocks = this.showBidMarkers();
    // console.log(markersocks);

    // console.log("haaay", marker);

    // markers.addObject(marker);
    return bids;
  }
});
