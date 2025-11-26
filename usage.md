this lib is used for formatting string in case like naming a file

format: [a-z-1-9]\_[date_format].file_format(png/jpeg/jpg)

# default:

string length = 6
date_format = dd/mm/yyyy

```
ro_formatted() -> az0102_25/11/2025.png
```

# with parameters

## single param

ro_formatted(str_length)

> str_length = minim: 6, max: 8

```
ro_formatted(6) -> az0102_25/11/2025.png
```

```
ro_formatted(8) -> az0102xA_25/11/2025.png
```

## double param

ro_formatted(str_length, date)
