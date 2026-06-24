import { createShadowRoot } from "./shadowRoot";
import { mountReactApp } from "./mount";

export const bootstrapWidget = () => {
  console.log("Bootstrap Started");

  if (document.getElementById("ai-chatbot-widget")) {
    return;
  }

  const host = document.createElement("div");
  host.id = "ai-chatbot-widget";

  document.body.appendChild(host);

  console.log("Host Added");

  const shadowRoot = createShadowRoot(host);

  console.log("Shadow Created");

  mountReactApp(shadowRoot);

  console.log("React Mounted");
};