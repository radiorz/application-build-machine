export function getMaxHeight(el: HTMLElement, footerHeight = 0) {
  const rect = el.getBoundingClientRect();
  return window.innerHeight - rect.top - footerHeight;
}
