import { createRoot } from "react-dom/client";
import App from "../App";

export const mountReactApp = (
  shadowRoot: ShadowRoot
) => {
  const container = document.createElement("div");

  container.id = "chatbot-app";

  shadowRoot.appendChild(container);

  const root = createRoot(container);

  root.render(<App />);
};