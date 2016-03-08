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
    var node = document.createElement("span");
    var breakLine = document.createElement("br");
    var textnode = document.createTextNode(time(snapshot.val().date)+ " - "+ "anonymus" +" : "+ snapshot.val().message);
    node.appendChild(textnode);
    chatBox.appendChild(node);
    chatBox.appendChild(breakLine);
    breakLine = document.createElement("br");
    chatBox.appendChild(breakLine);
    chatBox.scrollTop=chatBox.scrollHeight
}