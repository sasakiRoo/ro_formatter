# ro_string_formatter

A lightweight utility library for generating random strings paired with formatted dates.  
Includes built-in input validation with colorized error messages powered by **chalk**.

> **Current Version:** `2.0.0`

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

---

## ✨ New Features

### 🎲 Generate formatted string randomly - ro_formatted

```javascript
// Example output: abczef_28/11/2025
```

### 🎲 Generate formatted uuid randomly - ro_uuid

```javascript
/**
 * b65500d9-5c43-c1ce-3e92-f0e0f13274e0
  20c09e51-692a-ec0f-7b0e-34b1baf105f5
  d59b5efa-e6b1-03b4-8b05-dff88acde4a2
  8ec24406-c097-cc6e-f2db-b8dd140d860a
  271f97d6-ea70-96f5-ad4a-71e03acab38b
  6f3dd2d2-98c2-fbb5-086c-ab90fcb0587b
  8c547662-7240-0a77-e04b-cf7c9b436e86
  fa912ffd-d6fd-248c-36ae-9dc57b4ce5ba
  b52787f6-0512-3725-e9ab-52a67231931f
  f11f6cd8-96fc-4300-ccc4-f90c61eb703f
 */
```

### 🐶 Husky Commit Convention

Husky enhances your commits and more 🐶 woof!

Automatically lint your commit messages, code, and run tests upon committing or pushing.

### 🧪 Unit Test

We are using Vitest to do Unit Testing

## 🚀 Usage

```javascript
import ro_formatted from "ro_string_formatter";

const result = ro_formatted(6, "default");
console.log(result);
// Example output: abczef_28/11/2025
```

```javascript
import { ro_uuid } from "ro_string_formatter";

for (let i = 0; i < 10; i++) {
  console.log(ro_uuid());
}
/**example output:
 * b65500d9-5c43-c1ce-3e92-f0e0f13274e0
  20c09e51-692a-ec0f-7b0e-34b1baf105f5
  d59b5efa-e6b1-03b4-8b05-dff88acde4a2
  8ec24406-c097-cc6e-f2db-b8dd140d860a
  271f97d6-ea70-96f5-ad4a-71e03acab38b
  6f3dd2d2-98c2-fbb5-086c-ab90fcb0587b
  8c547662-7240-0a77-e04b-cf7c9b436e86
  fa912ffd-d6fd-248c-36ae-9dc57b4ce5ba
  b52787f6-0512-3725-e9ab-52a67231931f
  f11f6cd8-96fc-4300-ccc4-f90c61eb703f
 */
```

---

## 🧩 API Reference

### `ro_formatted(str_length = 6, chosen_date_format = "default")`

Returns a formatted string composed of:

```
[randomString]_[formattedDate]
```

#### Parameters

| Name                 | Type   | Description                               |
| -------------------- | ------ | ----------------------------------------- |
| `str_length`         | number | Length of random string (must be **6–8**) |
| `chosen_date_format` | string | Either `"default"` or `"usa"`             |

#### Examples

```js
console.log(ro_formatted(6, "default"));
// hlohdm_14/12/2025"
ro_formatted(8, "usa");
//"hxxlvxbm_12/14/2025"
```

---

## ⚠️ Error Handling

This library throws descriptive, colorized errors using **chalk**.

Examples:

```js
ro_formatted(3);
// Error: value of str_length should be in between of 6 and 8 and, yet we got 3
```

```js
ro_formatted(6, "japan");
// Error: format japan is not accepted. we only accept either default or usa
```

---

## 📌 Notes

- This is **version 2.0.0**
- Contributions, suggestions, and issue reports are welcome once the GitHub repository is made public.

---
