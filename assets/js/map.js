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

// Attractions Markers
addMarker ({
    latlong:{lat:37.4445,lng:25.3254}, // Mykonos Windmills
    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'});
addMarker ({
    latlong:{lat:37.4896,lng:25.3145}, //Armenistis Lighthouse
    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'});
addMarker ({
    latlong:{lat:37.4466,lng:25.3260}, //Little Venice
    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'});
addMarker ({
    latlong:{lat:37.4471,lng:25.3257}, //Panagia Paraportiani
    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'});

// Restaurant Markers
addMarker ({
    latlong:{lat:37.4215,lng:25.3113}, // Hippie Fish
    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'});
addMarker ({
    latlong:{lat:37.447133,lng:25.327103}, //Kounelas Fish Taverna
    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'});
addMarker ({
     latlong:{lat:37.423499,lng:25.323656}, //Lefteris GrillHouse
    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'});
addMarker ({
     latlong:{lat:37.4438,lng:25.3284}, //Bakalo Greek Eatery
    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'});

// Areas Markers
addMarker ({
    latlong:{lat:37.4467,lng:25.3289}, // Mykonos Town
    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'});
addMarker ({
    latlong:{lat:37.4235,lng:25.3233}, //Ornos
    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'});
addMarker ({
    latlong:{lat:37.4475,lng:25.3912}, //Ano Mera
    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'});
addMarker ({
    latlong:{lat:37.4138,lng:25.3470}, //Platis Gialos
    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'});



// Add marker function

function addMarker(props){
var marker = new google.maps.Marker({
        position:props.latlong,
        map:map,
        //icon:props.iconImage
      });

// check for customIcon
if(props.iconImage){
// set icon image
marker.setIcon(props.iconImage);
}
}
}