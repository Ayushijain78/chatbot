import { createShadowRoot } from "./shadowRoot";
import { mountReactApp } from "./mount";

export const bootstrapWidget = () => {
  // prevent duplicate injection
  if (
    document.getElementById(
      "ai-chatbot-widget"
    )
  ) {
    return;
  }

  const host = document.createElement("div");

  host.id = "ai-chatbot-widget";

  document.body.appendChild(host);

  const shadowRoot =
    createShadowRoot(host);

  mountReactApp(shadowRoot);
};