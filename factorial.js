function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError('от 0 до 12 ')
  }
  return n ? n * factorial(n - 1) : 1;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));

// 1, 1, 2, 6