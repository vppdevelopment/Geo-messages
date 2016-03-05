L.mapbox.accessToken = 'pk.eyJ1IjoidnBwZGV2ZWxvcG1lbnQiLCJhIjoiY2lqb3ZxZndrMDB5anRva280NHNjcmhhOCJ9._KXGbPR4VZjyVE5yuTt5xg';
var map = L.mapbox.map('map', 'mapbox.streets').setView([4.65454, -74.05566],17);

var myLayer = L.mapbox.featureLayer().addTo(map);

function init(){

    var markers = new L.MarkerClusterGroup();
    map.addLayer(markers);

    onMessageLoad(function(snapshot)
    {

      var title = snapshot.val().message;
      var marker = L.marker(new L.LatLng(snapshot.val().lat, snapshot.val().long), {
          icon: L.mapbox.marker.icon({'marker-symbol': 'post', 'marker-color': '0044FF'}),
          title: title
      });
      marker.bindPopup(title);
      markers.addLayer(marker);

    });
}