const emailRegExp: RegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numberRegExp: RegExp = /^[0-9]{11}$/;

/**
 * Checks that the supplied value passes the RegExp test.
 * @param {string} value The value to test.
 * @param {RegExp} regExp The regExp to validate.
 * @returns {boolean | string} True if value passes the test, otherwise returns false.
 */
export function validateWithRegExp(value: string, regExp: RegExp): boolean {
  return value.match(regExp) !== null;
}

/**
 * Checks that the suppiled value is not empty.
 * @param {string} value The value to check.
 * @returns {boolean | string} True if value is not empty, otherwise returns the key to the error text.
 */
export function notEmpty(value: string): boolean | string {
  return value && value.trim().length > 0 ? true : 'A value must be entered!';
}

/**
 * Checks that the suppiled value is not an empty array.
 * @param {Array<T>} value The value to check.
 * @returns {boolean|string} True if value is not empty, otherwise returns the key to the error text.
 */
export function notEmptyArray<T>(value: Array<T>): boolean | string {
  return value && value.length > 0 ? true : 'A value must be entered!';
}

/**
 * Checks that the suppiled value is a valid email.
 * @param {string} value The value to check
 * @returns {boolean | string} True if value is not empty, otherwise returns the key to the error text.
 */
export function isEmail(value: string): boolean | string {
  return validateWithRegExp(value, emailRegExp)
    ? true
    : 'A valid email must be entered!';
}

/**
 * Checks to see if a string is a number
 * @function
 * @param {string} value - The string to check
 * @returns {boolean} True if the string is a number, otherwise returns the key to the error text
 */
export function isNumber(value: string): boolean | string {
  return validateWithRegExp(value, numberRegExp);
}
