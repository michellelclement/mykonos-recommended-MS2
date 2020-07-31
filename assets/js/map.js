function initMap() {
  var options = {
    zoom: 12,
    center: { lat: 37.4467, lng: 25.3289 },
  };

  var map = new google.maps.Map(document.getElementById("map"), options);

  var marker = new google.maps.Marker({
        position:{lat:37.4445,lng:25.3254},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      });
        
        
        }
