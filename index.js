import chalk from "chalk";

function randomiseStr(len) {
  const string_list = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );
  let x = [];

  if (len >= 6 && len <= 8) {
    for (let i = 1; i <= len; i++) {
      const rdIdx = Math.floor(Math.random() * string_list.length);
      x.push(string_list[rdIdx]);
    }
    return x.join("");
  }

  if (len < 6) {
    throw new Error(
      `value of ${chalk.blue("str_length")} should start from ${chalk.green(
        "6"
      )}, yet we got ${chalk.red(len)}`
    );
  }
  if (len > 8) {
    throw new Error(
      `value ${chalk.blue("str_length")} should never start above ${chalk.green(
        "8"
      )}, yet we got ${chalk.red(len)}`
    );
  }
  return "";
}

function get_formatted_date(chosen_date_format) {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  const accepted_format = ["default", "usa"];

  if (!accepted_format.includes(chosen_date_format)) {
    throw new Error(
      `format ${chalk.red(
        chosen_date_format
      )} is not accepted. we only accept either ${accepted_format[0]} or ${
        accepted_format[1]
      }`
    );
  }

  if (chosen_date_format === accepted_format[0]) {
    return `${date}/${month}/${year}`;
  }
  if (chosen_date_format === accepted_format[1]) {
    return `${month}/${date}/${year}`;
  }
}

export default function ro_formatted(
  str_length = 6,
  chosen_date_format = "default"
) {
  const errors = [];

  if (typeof str_length !== "number") {
    errors.push(
      `parameter of ${chalk.blue(
        "str_length"
      )} should be number, yet we got ${typeof str_length}`
    );
  }

  if (typeof chosen_date_format !== "string") {
    errors.push(
      `parameter of ${chalk.blue(
        "chosen_date_format"
      )} should be string, yet we got ${typeof chosen_date_format}`
    );
  }

  if (errors.length === 2) {
    throw new Error(errors.join(" & "));
  }

  if (errors[0]) {
    throw new Error(errors[0]);
  }

  if (errors[1]) {
    throw new Error(errors[1]);
  }

  return `${randomiseStr(str_length)}_${get_formatted_date(
    chosen_date_format
  )}`;
}

// console.log(ro_formatted("a", "brit"));
