L.mapbox.accessToken = 'pk.eyJ1IjoidnBwZGV2ZWxvcG1lbnQiLCJhIjoiY2lqb3ZxZndrMDB5anRva280NHNjcmhhOCJ9._KXGbPR4VZjyVE5yuTt5xg';
var map = L.mapbox.map('map', 'mapbox.streets').setView([4.65454, -74.05566],14);;

var myLayer = L.mapbox.featureLayer().addTo(map);

if (!navigator.geolocation)
{
    alert('Geolocation is not available');
} else
{
    map.locate();
}

function init(){


  onMessageLoad(function(snapshot)
    {
      var markers = new L.MarkerClusterGroup();

      var title = snapshot.val().message;
      var marker = L.marker(new L.LatLng(snapshot.val().lat, snapshot.val().long), {
          icon: L.mapbox.marker.icon({'marker-symbol': 'post', 'marker-color': '0044FF'}),
          title: title
      });

          marker.bindPopup(title);
          markers.addLayer(marker);

          map.addLayer(markers);
    });


}
function onmove() {
    // Get the map bounds - the top-left and bottom-right locations.
    var inBounds = [],
        bounds = map.getBounds();
    markers.eachLayer(function(marker) {
        // For each marker, consider whether it is currently visible by comparing
        // with the current map bounds.
        if (bounds.contains(marker.getLatLng())) {
            inBounds.push(marker.options.title);
        }
    });
    // Display a list of markers.
    document.getElementById('coordinates').innerHTML = inBounds.join('\n');
}

map.on('move', onmove);

// call onmove off the bat so that the list is populated.
// otherwise, there will be no markers listed until the map is moved.
onmove();
