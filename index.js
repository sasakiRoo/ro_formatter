import uuid from "./src/uuid.js";
import { typeValidation, valueValidation } from "./errorValidation.js";

const ro_uuid = uuid;

/**
 * @typedef {"default" | "usa"} ChoosenDateFormat
 */

/**
 * randomiseStr
 * @param {number} len
 * @returns {string}
 */
function randomiseStr(len) {
  const string_list = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );
  let x = [];

  for (let i = 1; i <= len; i++) {
    const rdIdx = Math.floor(Math.random() * string_list.length);
    x.push(string_list[rdIdx]);
  }
  return x.join("");
}

/**
 * get_formatted_date
 * @param {ChoosenDateFormat} chosen_date_format
 * @returns {string}
 */
function get_formatted_date(chosen_date_format) {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  /**
   * @type {ChoosenDateFormat[]} accepted_format
   */
  const accepted_format = ["default", "usa"];

  if (chosen_date_format === accepted_format[0]) {
    return `${date}/${month}/${year}`;
  }
  if (chosen_date_format === accepted_format[1]) {
    return `${month}/${date}/${year}`;
  }
}
/**
 * ro_formatted
 * @param {number} str_length
 * @param {ChoosenDateFormat | undefined} chosen_date_format
 * @returns
 */
function ro_formatted(str_length = 6, chosen_date_format = "default") {
  const validateType = typeValidation(str_length, chosen_date_format);
  const validateValue = valueValidation(str_length, chosen_date_format);
  if (validateType.length > 0) {
    if (validateType.length === 2) {
      throw new Error(validateType.join(" & "));
    }
    throw new Error(validateType);
  }
  if (validateValue.length > 0) {
    if (validateValue.length === 2) {
      throw new Error(validateValue.join(" & "));
    }
    throw new Error(validateValue);
  }
  return `${randomiseStr(str_length)}_${get_formatted_date(
    chosen_date_format
  )}`;
}

export { ro_uuid };
export default ro_formatted;
