function nextPrime(n) {
  if (++n < 2) {
    return 2
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return nextPrime(n)
    }
  }
  return n
}

console.log(nextPrime(0));
console.log(nextPrime(1));
console.log(nextPrime(2));
console.log(nextPrime(3));
console.log(nextPrime(5));
console.log(nextPrime(11));
console.log(nextPrime(17));
console.log(nextPrime(2971));