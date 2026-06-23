import type { Message as MessageType } from "../../types/chat";

interface Props {
  message: MessageType;
}

export default function Message({
  message,
}: Props) {
  const isUser =
    message.role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser
          ? "flex-end"
          : "flex-start",
        marginBottom: "12px",
      }}
    >
      <div
        style={{
          maxWidth: "80%",
          padding: "10px",
          borderRadius: "12px",
          background: isUser
            ? "#000"
            : "#f1f1f1",
          color: isUser
            ? "#fff"
            : "#000",
        }}
      >
        {message.content}
      </div>
    </div>
  );
}