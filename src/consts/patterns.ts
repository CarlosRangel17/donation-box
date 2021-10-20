/**
 *  Basic Phone Number Pattern
 *  Accepts:
 *
 *  1234567890
 *  123-456-7890
 *  (123) 456-7890
 *  123 456 7890
 *  123.456.7890
 *  +91 (123) 456-7890
 *
 */
export const PHONE_NUMBER = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

/**
 *  Basic Email Pattern
 *  Requires: usename + '@' + domain
 *  and a '.' within domain
 *
 *  Accepts:
 *  example@test.com
 *
 */
export const EMAIL = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/i

/**
 *  Number Pattern
 *  Accpets Numbers only, no special chars
 */
export const NUMBER = /^[0-9]*$/
