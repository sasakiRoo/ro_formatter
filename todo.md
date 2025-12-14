# todos

# fixed

1. skenario berikut berhasil diperbaiki

- tipe parameter salah dan tipe parameter kedua benar. namun, nilai parameter kedua ini salah

```
console.log(ro_formatted("aca", "brit"));
```

- aca -> salah tipe parameter
- brit -> tipe parameter benar. namun, nilainya tidak benar

2.  skenario berikut berhasil diperbaiki

```
console.log(ro_formatted(2, 2));
```

- tipe paramA benar dan tipe kedua salah, tapi nilai paramA salah, karena tidak memenuhi kondisi persyaratan

### expectation

the output should:

```
Error: value of str_length should be in between of 6 and 8 and, yet we got 2 & chosen_date_format is not accepted. we only accept either default or usa
```
