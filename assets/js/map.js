function initMap() {
  var options = {
    zoom: 12,
    center: { lat: 37.4467, lng: 25.3289 },
  };

  var map = new google.maps.Map(document.getElementById("map"), options);
}
