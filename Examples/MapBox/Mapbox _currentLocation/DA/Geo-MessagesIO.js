var messagesIO = new Firebase("https://amber-heat-279.firebaseio.com/geo-messages");

function getMessages()
{
var messages = messagesIO.child('geo-messages');
return messages;
}
