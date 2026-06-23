import Launcher from "../Launcher/Launcher";
import ChatPanel from "../ChatPanel/ChatPanel";
import { useChatStore } from "../../store/chatStore";

export default function Widget() {
  const isOpen =
    useChatStore(
      (state) => state.isOpen
    );

  return (
    <>
      {!isOpen && <Launcher />}

      {isOpen && <ChatPanel />}
    </>
  );
}