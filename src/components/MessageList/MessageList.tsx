import { useChatStore } from "../../store/chatStore";

import Message from "../Message/Message";

export default function MessageList() {
  const messages =
    useChatStore(
      (state) => state.messages
    );

  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "16px",
      }}
    >
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
        />
      ))}
    </div>
  );
}