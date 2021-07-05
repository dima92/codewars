function factorial(n) {
  if (n < 0) {
    return null
  }
  return n ? n * factorial(n - 1) : 1
}

console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(-1));