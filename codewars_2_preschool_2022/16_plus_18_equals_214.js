function add(num1, num2) {
  return num1 * num2
    ? +`${add((num1 / 10) | 0, (num2 / 10) | 0)}${(num1 % 10) + (num2 % 10)}`
    : num1 + num2
}

console.log(add(2, 11)); // 13
console.log(add(0, 1));  // 1
console.log(add(0, 0));  // 0
