import './style.scss';

/**
 * Mock: https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3d3f154277a842ef2f1b06ccbf854efc-1619951517276/fe_mock.png
 */

/**
 * Message object
 * @typedef {Object} message
 * @property {string} content - The message content.
 * @property {string} user - The message sender.
 * @property {number} timestamp - The message timestamp in millieseconds.
 * @property {string} id - The message id.
 */

var state = {
  messages: [],
};

window.Chat.onMessage((message) => {
  // create & append
  var container = document.getElementById('messages-container');
  var messageContainer = document.createElement('div');
  messageContainer.className = 'message-container';

  // var messageContent = document.createElement('div');
  // messageContent.className = 'message-content';

  var newMessage = document.createElement('div');
  newMessage.innerHTML = message.content;
  newMessage.className = 'message';

  if (message.user === 'Me') {
    newMessage.classList += ' self';
  }

  //if first
  if (state.messages[message.length - 1]?.user !== message.user) {
    console.log(state.messages[state.messages.length - 1]?.user, message.user);
    messageContainer.classList += ' with-arrow';
    var user = document.createElement('div');
    user.innerHTML = message.user;
    messageContainer.appendChild(user);
  }

  var timestamp = document.createElement('div');
  timestamp.innerHTML = 'time';
  timestamp.className = 'timestamp';

  messageContainer.appendChild(newMessage);
  messageContainer.appendChild(timestamp);

  container.appendChild(messageContainer);
  state.messages.push(message);
});

window.Chat.sendMessage('Ofirrr');

window.Chat.onTyping((username) => {});

var input = document.getElementById('message-input');
var form = document.getElementById('my-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  var message = input.value;
  console.log(message);
  window.Chat.sendMessage(message);
  input.value = "";
  console.log('data', event);
});

// function sendMessage() {
//   var input = document.getElementById('message-input');
//   var message = input.value;
//   console.log(message);
//   window.Chat.sendMessage(message);
// }
