function typeOfSum(a, b) {
  return typeof (a + b)
}

console.log(typeOfSum(12, 1));
console.log(typeOfSum('d', 1));
console.log(typeOfSum(1, 'a'));
console.log(typeOfSum('dd', ''));
console.log(typeOfSum(true, 1));
