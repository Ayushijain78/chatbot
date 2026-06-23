export const createShadowRoot = (
  hostElement: HTMLElement
): ShadowRoot => {
  return hostElement.attachShadow({
    mode: "open",
  });
};