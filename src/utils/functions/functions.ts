/**
 * Navigates to a particular element.
 * @param {string} value The value to check
 * @returns {boolean | string} True if value is not empty, otherwise returns the key to the error text
 */
export function scrollToElement(targetId: HTMLDivElement): void {
  window.scrollTo({
    // Minus the v-app-bar heights (64)
    top: targetId.offsetTop,
    behavior: 'smooth',
  });
}
