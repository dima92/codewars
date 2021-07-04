function sumTriangularNumbers(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += (i * (i + 1)) / 2
  }
  if (n < 0) {
    return 0
  }
  return sum
}

console.log(sumTriangularNumbers(6));
console.log(sumTriangularNumbers(34));
console.log(sumTriangularNumbers(-291));
console.log(sumTriangularNumbers(943));
console.log(sumTriangularNumbers(-971));