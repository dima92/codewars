function getDecimal(n) {
  n = Math.abs(n)
  return  n - Math.floor(n)
}

console.log(getDecimal(1.2));
