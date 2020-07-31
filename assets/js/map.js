function initMap() {
  var options = {
    zoom: 12,
    center: { lat: 37.4467, lng: 25.3289 },
  };

  var map = new google.maps.Map(document.getElementById("map"), options);

  /*
  var marker = new google.maps.Marker({
    position: { lat: 37.4445, lng: 25.3254 },
    map: map,
    icon:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
  });

  var infoWindow = new google.maps.InfoWindow({
    content: "<h4>Mykonos Windmills<h4>",
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });

*/ 

addMarker ({lat:37.4445,lng:25.3254});
addMarker ({lat:37.4896,lng:25.3145});
addMarker ({lat:37.4466,lng:25.3260});
addMarker ({lat:37.4471,lng:25.3257});

// Add marker function

function addMarker(latlong){
var marker = new google.maps.Marker({
        position:latlong,
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      });

}
}