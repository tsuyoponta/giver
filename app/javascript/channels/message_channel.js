import consumer from "./consumer"

consumer.subscriptions.create("MessageChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const nickName = `<P>${data.user.nickname}</P>`;
    const createdAt = `<P>${data.content.created_at}</P>`;
    const text = `<P>${data.content.content}</P>`;
    const messages = document.getElementById("messages");
    const newMessage = document.getElementById("message_content");
    messages.insertAdjacentHTML("beforeend", nickName);
    messages.insertAdjacentHTML("beforeend", createdAt);
    messages.insertAdjacentHTML("beforeend", text);
    newMessage.value="";
  }
});
