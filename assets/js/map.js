function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: {
      lat: 37.4467,
      lng: 25.3289,
    },
  });
}

var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var markers = locations.map(function (location, i) {
  return new google.maps.Marker({
    position: location,
    label: labels[i % labels.length],
  });
});
var markerCluster = new MarkerClusterer(map, markers, {
  imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
});

var locations = [
  { lat: 37.4445, lng: 25.3254 },
  { lat: 37.4896, lng: 25.3145 },
  { lat: 37.4466, lng: 25.326 },
  { lat: 37.4471, lng: 25.3257 },
];
