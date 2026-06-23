import { useState } from "react";
import { useChatStore } from "../../store/chatStore";

export default function ChatInput() {
  const [value, setValue] = useState("");

  const addMessage = useChatStore((state) => state.addMessage);

  const handleSend = () => {
    if (!value.trim()) return;

    addMessage({
      id: crypto.randomUUID(),
      role: "user",
      content: value,
      createdAt: Date.now(),
    });
    setTimeout(() => {
      addMessage({
        id: crypto.randomUUID(),
        role: "assistant",
        content: "This is a demo response.",
        createdAt: Date.now(),
      });
    }, 1000);
    setValue("");
  };

  return (
    <div
      style={{
        padding: "16px",
        borderTop: "1px solid #ddd",
        display: "flex",
        gap: "8px",
      }}
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask anything..."
        style={{
          flex: 1,
          height: "40px",
        }}
      />

      <button onClick={handleSend}>Send</button>
    </div>
  );
}


// import { useState } from "react";
// import { useChatStore } from "../../store/chatStore";
// import { sendMessage } from "../../services/chatApi";

// export default function ChatInput() {
//   const [value, setValue] = useState("");

//   const [loading, setLoading] = useState(false);
//   const addMessage = useChatStore((state) => state.addMessage);
//   const handleSend = async () => {
//     const userMessage = value;
//     setLoading(true);

//     setValue("");
//     addMessage({
//       id: crypto.randomUUID(),
//       role: "user",
//       content: userMessage,
//       createdAt: Date.now(),
//     });

//     const response = await sendMessage(userMessage);
//     setLoading(false);
//     addMessage({
//       id: crypto.randomUUID(),
//       role: "assistant",
//       content: response.answer,
//       createdAt: Date.now(),
//     });
//   };
//   return (
//     <div
//       style={{
//         padding: "16px",
//         borderTop: "1px solid #ddd",
//         display: "flex",
//         gap: "8px",
//       }}
//     >
//       <input
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         placeholder="Ask anything..."
//         style={{
//           flex: 1,
//           height: "40px",
//         }}
//       />
//       <button onClick={handleSend} disabled={loading}>
//         {loading ? "..." : "Send"}
//       </button>
//     </div>
//   );
// }
