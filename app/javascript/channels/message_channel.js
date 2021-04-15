import consumer from "./consumer"

consumer.subscriptions.create("MessageChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const nickName = `
      <div class="message-user">
        ${data.user}
      </div>
    `;
    const createdAt = `
      <div class="message-date">
        ${data.time}
      </div>
    `;
    const text = `
      <div class="message-content">
        ${data.content}
      </div>
    `;
    const upperMessage = `
      <div class="upper-message">
        ${nickName} ${createdAt}
      </div>
    `;
    const lowerMessage = `
      <div class="lower-message">
        ${text}
      </div>
    `;
    const messages = document.getElementById("messages");
    const newMessage = document.getElementById("message_content");
    messages.insertAdjacentHTML("beforeend", upperMessage);
    messages.insertAdjacentHTML("beforeend", lowerMessage);
    newMessage.value="";
  }
});

