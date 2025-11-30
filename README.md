# ro_string_formatter

A lightweight utility library for generating random strings paired with formatted dates.  
Includes built-in input validation with colorized error messages powered by **chalk**.

> **Current Version:** `1.0.0`  
> **Status:** Early release — contains one known issue to be fixed in upcoming versions.

---

## 📦 Installation

Install via npm:

```bash
npm i ro_string_formatter
```

---

## ✨ Features

- Generate a randomized lowercase string (6–8 characters)
- Append a formatted date to the string
- Supports two date formats:  
  - `"default"` → `DD/MM/YYYY`  
  - `"usa"` → `MM/DD/YYYY`
- Helpful error messages with colored output using **chalk**
- Basic parameter type-checking

---

## 🚀 Usage

```javascript
import ro_formatted from "ro_string_formatter";

const result = ro_formatted(6, "default");
console.log(result);
// Example output: abczef_28/11/2025
```

---

## 🧩 API Reference

### `ro_formatted(str_length = 6, chosen_date_format = "default")`

Returns a formatted string composed of:

```
[randomString]_[formattedDate]
```

#### Parameters

| Name                  | Type   | Description                                      |
|-----------------------|--------|--------------------------------------------------|
| `str_length`          | number | Length of random string (must be **6–8**)        |
| `chosen_date_format`  | string | Either `"default"` or `"usa"`                    |

#### Examples

```js
ro_formatted(7, "default"); // "asdkfop_30/11/2025"
ro_formatted(8, "usa");     // "qwertyui_11/30/2025"
```

---

## ⚠️ Error Handling

This library throws descriptive, colorized errors using **chalk**.

Examples:

```js
ro_formatted(3);
// Error: value of str_length should start from 6, yet we got 3
```

```js
ro_formatted(6, "japan");
// Error: format japan is not accepted. we only accept either default or usa
```

---

## 📌 Notes

- This is **version 1.0.0**, an early iteration of the library.
- There is **one known issue** that will be resolved in the next update.
- Contributions, suggestions, and issue reports are welcome once the GitHub repository is made public.

---
