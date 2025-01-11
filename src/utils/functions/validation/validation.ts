/**
 * Checks that the suppiled value is not empty
 * @param {string} value The value to check
 * @returns {boolean | string} True if value is not empty, otherwise returns the key to the error text
 */
export function notEmpty(value: string): boolean | string {
  return value && value.trim().length > 0 ? true : 'A value must be entered!';
}
