var messagesIO = new Firebase("https://amber-heat-279.firebaseio.com/geo-messages");

function addMessage(tag, content)
{
  messagesIO.child(tag).push(content);
}

