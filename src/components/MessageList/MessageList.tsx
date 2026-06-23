import { useEffect, useRef } from "react";
import { useChatStore } from "../../store/chatStore";
import Message from "../Message/Message";

export default function MessageList() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const messages = useChatStore((state) => state.messages);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "16px",
      }}
    >
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      
      {/* 1. Add this empty div at the bottom of the list */}
      <div ref={bottomRef} />
    </div>
  );
}