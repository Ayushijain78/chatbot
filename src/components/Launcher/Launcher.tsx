import { useChatStore } from "../../store/chatStore";

export default function Launcher() {
  const openChat =
    useChatStore(
      (state) => state.openChat
    );

  return (
    <button
      onClick={openChat}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        fontSize: "18px",
        fontWeight: "bold",
        background: "#000",
        color: "#fff",
      }}
    >
      AI
    </button>
  );
}