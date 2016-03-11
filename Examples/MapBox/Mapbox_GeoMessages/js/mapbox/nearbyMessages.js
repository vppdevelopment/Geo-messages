L.mapbox.accessToken = 'pk.eyJ1IjoidnBwZGV2ZWxvcG1lbnQiLCJhIjoiY2lqb3ZxZndrMDB5anRva280NHNjcmhhOCJ9._KXGbPR4VZjyVE5yuTt5xg';
var map = L.mapbox.map('map', 'mapbox.streets').setView([4.65454, -74.05566],17);
var myLayer = L.mapbox.featureLayer().addTo(map);


function init(){

    var markers = new L.MarkerClusterGroup();
    map.addLayer(markers);

    onMessageLoad(function(snapshot)
    {
        AddPointToMap(snapshot, markers);
        AddMessageToChatBox(snapshot);
    });
}


function AddPointToMap(snapshot, markers)
{
    var title = snapshot.val().message;
    var marker = L.marker(new L.LatLng(snapshot.val().lat, snapshot.val().long), {
      icon: L.mapbox.marker.icon({'marker-symbol': 'post', 'marker-color': '0044FF'}),
      title: title
    });
    marker.bindPopup(title);
    markers.addLayer(marker);
}


function AddMessageToChatBox(snapshot)
{
    var card = document.createElement("div");
    card.className = "card blue-grey darken-1";

    var cardContent = document.createElement('div');
    cardContent.className = "card-content white-text";

    var cardTitle = document.createElement('span');
    cardTitle.className = "card-title";
    cardTitle.innerHTML = time(snapshot.val().date)+ " - "+ "anonymus";

    var p = document.createElement('p');
    p.innerHTML = snapshot.val().message;

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(p);
    card.appendChild(cardContent);

    chatBox.appendChild(card);
    chatBox.scrollTop=chatBox.scrollHeight
}