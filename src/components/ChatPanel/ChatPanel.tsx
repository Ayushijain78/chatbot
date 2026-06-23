import { useChatStore } from "../../store/chatStore";
import MessageList from "../MessageList/MessageList";
import ChatInput from "../ChatInput/ChatInput";

export default function ChatPanel() {
  const closeChat = useChatStore((state) => state.closeChat);

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "420px",
        height: "100vh",
        background: "#fff",
        borderLeft: "1px solid #ddd",
        display: "flex",
        flexDirection: "column", // Stacks Header, MessageList, and Input vertically
      }}
    >
      {/* Header */}
      <div
        style={{
          height: "60px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 16px",
          flexShrink: 0, // Prevents header from shrinking
        }}
      >
        <strong>AI Assistant</strong>
        <button onClick={closeChat}>✕</button>
      </div>

      {/* 1. REMOVED the extra wrapper div.
        2. Render MessageList directly so its `flex: 1` can expand and fill the space.
      */}
      <MessageList />
      
      {/* 3. Render ChatInput directly at the bottom */}
      <ChatInput />
    </div>
  );
}