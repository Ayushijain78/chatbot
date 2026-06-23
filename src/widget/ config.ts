declare global {
  interface Window {
    ChatbotConfig?: {
      siteId: string;
    };
  }
}

export const getConfig = () => {
  return window.ChatbotConfig;
};