function initMap() {
  var options = {
    zoom: 12,
    center: { lat: 37.4467, lng: 25.3289 },
  };

  var map = new google.maps.Map(document.getElementById("map"), options);

var markers = [
{
    latlong:{lat:37.4445,lng:25.3254}, // Mykonos Windmills
    iconImage:'assets/images/attraction.png',
    content:'<h4>Mykonos Windmills</h4>'},
    {
    latlong:{lat:37.4896,lng:25.3145}, //Armenistis Lighthouse
    iconImage:'assets/images/attraction.png',
    content:'<h4>Armenistis Lighthouse</h4>'},
    {
    latlong:{lat:37.4466,lng:25.3260}, //Little Venice
    iconImage:'assets/images/attraction.png',
    content:'<h4>Little Venice</h4>'},
    {
    latlong:{lat:37.4471,lng:25.3257}, //Panagia Paraportiani
    iconImage:'assets/images/attraction.png',
    content:'<h4>Panagia Paraportiani</h4>'},
    {
    latlong:{lat:37.4215,lng:25.3113}, // Hippie Fish
    iconImage:'assets/images/restaurant.png',
    content:'<h4>Hippie Fish</h4>'},
    {
    latlong:{lat:37.447133,lng:25.327103}, //Kounelas Fish Taverna
    iconImage:'assets/images/restaurant.png',
    content:'<h4>Kounelas Fish Taverna</h4>'},
    {
    latlong:{lat:37.423499,lng:25.323656}, //Lefteris GrillHouse
    iconImage:'assets/images/restaurant.png',
    content:'<h4>Lefteris GrillHouse</h4>'},
    {
    latlong:{lat:37.4438,lng:25.3284}, //Bakalo Greek Eatery
    iconImage:'assets/images/restaurant.png',
    content:'<h4>Bakalo Greek Eatery</h4>'},
    {
    latlong:{lat:37.4467,lng:25.3289}, // Mykonos Town
    iconImage:'assets/images/area.png',
    content:'<h4>Mykonos Town</h4>'},
    {
    latlong:{lat:37.4235,lng:25.3233}, //Ornos
    iconImage:'assets/images/area.png',
    content:'<h4>Ornos</h4>'},
    {
    latlong:{lat:37.4475,lng:25.3912}, //Ano Mera
    iconImage:'assets/images/area.png',
    content:'<h4>Ano Mera</h4>'},
    {
    latlong:{lat:37.4138,lng:25.3470}, //Platis Gialos
    iconImage:'assets/images/area.png',
    content:'<h4>Platis Gialos</h4>'}
];

// Loop through markers
for(var i = 0;i < markers.length;i++){
    addMarker (markers[i]);
}

  
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

    // Check content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });

      marker.addListener("click", function () {
        infoWindow.open(map, marker);
      });
    }
  }
}
