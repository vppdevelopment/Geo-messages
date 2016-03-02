L.mapbox.accessToken = 'pk.eyJ1IjoidnBwZGV2ZWxvcG1lbnQiLCJhIjoiY2lqb3ZxZndrMDB5anRva280NHNjcmhhOCJ9._KXGbPR4VZjyVE5yuTt5xg';
var map = L.mapbox.map('map', 'mapbox.streets').setView([4.737229, -74.085872],14);;

var myLayer = L.mapbox.featureLayer().addTo(map);

if (!navigator.geolocation)
{
    alert('Geolocation is not available');
} else
{
    map.locate();
}


var markers = new L.MarkerClusterGroup();

var title = "Espectacular Rifa Carro 0 Km, ven ya CC Centro Suba";
var marker = L.marker(new L.LatLng(4.737229, -74.085872), {
    icon: L.mapbox.marker.icon({'marker-symbol': 'post', 'marker-color': '0044FF'}),
    title: title
});

    marker.bindPopup(title);
    markers.addLayer(marker);


    var title = "Happy Hour 3 x 1 en cocteles, Terraza Bar  ";
    var marker = L.marker(new L.LatLng(4.749108, -74.095383), {
        icon: L.mapbox.marker.icon({'marker-symbol': 'post', 'marker-color': 'DF0101'}),
        title: title
    });

        marker.bindPopup(title);
        markers.addLayer(marker);

map.addLayer(markers);

// Once we've got a position, zoom and center the map
// on it, and add a single marker.
map.on('locationfound', function(e) {
    map.fitBounds(e.bounds);

    myLayer.setGeoJSON({
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [e.latlng.lng, e.latlng.lat]
        },
        properties: {
            'title': 'Here I am!',
            'marker-color': '#ff8888',
            'marker-symbol': 'star'
        }
    });

});

// If the user chooses not to allow their location
// to be shared, display an error message.
map.on('locationerror', function() {
    alert('Position could not be found');
});



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
