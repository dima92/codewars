function century(year) {
  return Math.ceil(year / 100);
}

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(89));
