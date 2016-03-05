var messagesIO = new Firebase("https://amber-heat-279.firebaseio.com/geo-messages/117,-1851");

function onMessageLoad(refresh)
{
  messagesIO.on("child_added", function(snapshot, prevChildKey) {
  refresh(snapshot);
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}
