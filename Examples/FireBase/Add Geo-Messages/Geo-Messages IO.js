var messagesIO = new Firebase("https://blazing-torch-1750.firebaseio.com/geo-messages");

function addMessage(tag, content)
{
  messagesIO.child(tag).push(content);
}

