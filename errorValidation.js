import chalk from "chalk";

/**
 * typeValidation
 * @param {number} paramA
 * @param {string} paramB
 * @returns
 */

function typeValidation(paramA, paramB) {
  const errors = [];

  if (typeof paramA !== "number") {
    errors.push(
      `parameter of ${chalk.blue(
        "str_length"
      )} should be number, yet we got ${typeof paramA}`
    );
  }

  if (typeof paramB !== "string") {
    errors.push(
      `parameter of ${chalk.blue(
        "chosen_date_format"
      )} should be string, yet we got ${typeof paramB}`
    );
  }

  return errors;
}

/**
 * valueValidation
 * @param {number} paramA
 * @param {string} paramB
 * @returns
 */

function valueValidation(paramA, paramB) {
  const errors = [];
  const accepted_format = ["default", "usa"];
  const limitLength = paramA < 6 || paramA > 8;

  if (limitLength) {
    errors.push(
      `value of ${chalk.yellow(
        "str_length"
      )} should be in between of ${chalk.green(
        "6 and 8"
      )} and, yet we got ${chalk.red(paramA)}`
    );
  }

  if (!accepted_format.includes(paramB)) {
    errors.push(
      `format ${chalk.blue(paramB)} ${chalk.red(
        "is not accepted"
      )}. we only accept either ${accepted_format[0]} or ${accepted_format[1]}`
    );
  }

  return errors;
}

export { typeValidation, valueValidation };
