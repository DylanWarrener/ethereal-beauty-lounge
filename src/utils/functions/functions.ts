/**
 * Navigates to a particular element.
 * @param {string} value The value to check
 * @returns {boolean | string} True if value is not empty, otherwise returns the key to the error text
 */
export function scrollToElement(targetId: HTMLDivElement): void {
  window.scrollTo({
    // Minus the v-app-bar heights (64)
    // Minus the padding height (16)
    top: targetId.offsetTop - 64 - 16,
    behavior: 'smooth',
  });
}
