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
      <div class="upper-message">
        <div class="message-user">
          <P>${data.user.nickname}</P>
        </div>
      </div>
    `;
    const createdAt = `
      <div class="upper-message">
        <div class="message-date">
          <P>${data.content.created_at}</P>
        </div>
      </div>
    `;
    const text = `
      <div class="lower-message">
        <div class="message-content">
          <P>${data.content.content}</P>
        </div>
      </div>
    `;
    const messages = document.getElementById("messages");
    const newMessage = document.getElementById("message_content");
    messages.insertAdjacentHTML("beforeend", nickName);
    messages.insertAdjacentHTML("beforeend", createdAt);
    messages.insertAdjacentHTML("beforeend", text);
    newMessage.value="";
  }
});
