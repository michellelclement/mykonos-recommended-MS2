//Code as instructed via Google Maps & Course Material

function initMap() {
  var options = {
    zoom: 12,
    center: { lat: 37.4467, lng: 25.3289 },
  };


// Code as instructed by Google Documentation along with following the YouTube Tutorial by Traversy Media. Link in README

  var map = new google.maps.Map(document.getElementById("map"), options);

  var markers = [
    {
      latlong: { lat: 37.4445, lng: 25.3254 }, // Mykonos Windmills
      iconImage: "assets/images/attraction.png",
      content: "<img src='assets/images/map-images/windmills_150px.jpg'><h4>Mykonos Windmills</h4><a href='index.html#windmills-info'>Click here to learn more about Mykonos Windmills</a>",
    },
    {
      latlong: { lat: 37.4896, lng: 25.3145 }, //Armenistis Lighthouse
      iconImage: "assets/images/attraction.png",
      content: "<img src='assets/images/map-images/lighthouse_150px.jpg'><h4>Armenistis Lighthouse</h4><a href='index.html#armenistis-info'>Click here to learn more about Armenistis Lighthouse</a>",
    },
    {
      latlong: { lat: 37.4466, lng: 25.326 }, //Little Venice
      iconImage: "assets/images/attraction.png",
      content: "<img src='assets/images/map-images/little_venice_150px.jpg'><h4>Little Venice</h4><a href='index.html#little-venice-info'>Click here to learn more about Little Venice</a>",
    },
    {
      latlong: { lat: 37.4471, lng: 25.3257 }, //Panagia Paraportiani
      iconImage: "assets/images/attraction.png",
      content: "<img src='assets/images/map-images/church_150px.jpg'><h4>Panagia Paraportiani</h4><a href='index.html#panagia-info'>Click here to learn more about Panagia Paraportiani</a>",
    },
    {
      latlong: { lat: 37.4215, lng: 25.3113 }, // Hippie Fish
      iconImage: "assets/images/restaurant.png",
      content: "<img src='assets/images/map-images/hippie-fish_150px.jpg'><h4>Hippie Fish</h4><a href='index.html#hippie-fish-info'>Click here to learn more about Hippie Fish</a>",
    },
    {
      latlong: { lat: 37.447133, lng: 25.327103 }, //Kounelas Fish Taverna
      iconImage: "assets/images/restaurant.png",
      content: "<img src='assets/images/map-images/kounelas_150px.jpg'><h4>Kounelas Fish Taverna</h4><a href='index.html#kounelas-info'>Click here to learn more about Kounelas Fish Taverna</a>",
    },
    {
      latlong: { lat: 37.423499, lng: 25.323656 }, //Lefteris GrillHouse
      iconImage: "assets/images/restaurant.png",
      content: "<img src='assets/images/map-images/lefteris_150px.jpg'><h4>Lefteris GrillHouse</h4><a href='index.html#lefteris-info'>Click here to learn more about Lefteris GrillHouse</a>",
    },
    {
      latlong: { lat: 37.4438, lng: 25.3284 }, //Bakalo Greek Eatery
      iconImage: "assets/images/restaurant.png",
      content: "<img src='assets/images/map-images/bakalo_150px.jpg'><h4>Bakalo Greek Eatery</h4><a href='index.html#bakalo-info'>Click here to learn more about Bakalo Greek Eatery</a>",
    },
    {
      latlong: { lat: 37.4467, lng: 25.3289 }, // Mykonos Town
      iconImage: "assets/images/area.png",
      content: "<img src='assets/images/map-images/mykonos-town_150px.jpg'><h4>Mykonos Town</h4><a href='index.html#mykonos-town-info'>Click here to learn more about Mykonos Town</a>",
    },
    {
      latlong: { lat: 37.4235, lng: 25.3233 }, //Ornos
      iconImage: "assets/images/area.png",
      content: "<img src='assets/images/map-images/ornos_150px.jpg'><h4>Ornos</h4><a href='index.html#ornos-info'>Click here to learn more about Ornos</a>",
    },
    {
      latlong: { lat: 37.4475, lng: 25.3912 }, //Ano Mera
      iconImage: "assets/images/area.png",
      content: "<img src='assets/images/map-images/ano_150px.jpg'><h4>Ano Mera</h4><a href='index.html#ano-info'>Click here to learn more Ano Mera</a>",
    },
    {
      latlong: { lat: 37.4138, lng: 25.347 }, //Platis Gialos
      iconImage: "assets/images/area.png",
      content: "<img src='assets/images/map-images/platis_150px.jpg'><h4>Platis Gialos</h4><a href='index.html#platis-info'>Click here to learn more about Platis Gialos</a>",
    },
  ];

  // Loop through markers
  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  // Add marker function

  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.latlong,
      map: map,
    });

    // Check for customIcon
    if (props.iconImage) {
      // set icon image
      marker.setIcon(props.iconImage);
    }

    // Checks content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });

      marker.addListener("click", function () {
        infoWindow.open(map, marker);
        infowindow.close();
      });
    }
  }

// Code as instructed by Google Documentation along with YouTube Tutorial by Develop Mindfully. Link in ReadMe

  // Search Box
  var input = document.getElementById("search");
  var searchBox = new google.maps.places.SearchBox(input);

  map.addListener("bounds_changed", function () {
    searchBox.setBounds(map.getBounds());
  });

  var markersPlaces = [];

  searchBox.addListener("places_changed", function () {
    var places = searchBox.getPlaces();

    if (places.length == 0) return;

    markersPlaces.forEach(function (m) {
      m.setMap(null);
    });
    

    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (p) {
      if (!p.geometry) return;

      markersPlaces.push(
        new google.maps.Marker({
          map: map,
          title: p.name,
          position: p.geometry.location,
        })
      );

      if (p.geometry.viewport) bounds.union(p.geometry.viewport);
      else bounds.extend(p.geometry.location);
    });

    map.fitBounds(bounds);
  });
}