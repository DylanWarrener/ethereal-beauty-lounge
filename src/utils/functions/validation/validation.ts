/**
 * Checks that the suppiled value is not empty
 * @param {string} value The value to check
 * @returns {boolean | string} True if value is not empty, otherwise returns the key to the error text
 */
export function notEmpty(value: string): boolean | string {
  if (value.length === 0) return 'A value must be entered';

  // Gets rid of whitespace
  let val: string = value.trim();

  return val.length > 0 || 'A value must be entered';
}
