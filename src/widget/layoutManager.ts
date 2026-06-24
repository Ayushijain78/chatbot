const PANEL_WIDTH = 450;

export const openSplitPanel = () => {
  document.documentElement.classList.add(
    "chatbot-split-open"
  );

  let styleTag = document.getElementById(
    "chatbot-layout-style"
  );

  if (!styleTag) {
    styleTag = document.createElement("style");

    styleTag.id = "chatbot-layout-style";

    styleTag.innerHTML = `
      .chatbot-split-open body {
        margin-right: ${PANEL_WIDTH}px !important;
        transition: margin-right 0.3s ease;
      }
    `;

    document.head.appendChild(styleTag);
  }
};

export const closeSplitPanel = () => {
  document.documentElement.classList.remove(
    "chatbot-split-open"
  );
};