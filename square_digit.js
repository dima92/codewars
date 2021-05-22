function squareDigits(num) {
  return Number((' ' + num)
    .split('')
    .map(value => value * value)
    .join(''))
}

console.log(squareDigits(3212));
console.log(squareDigits(2112));
console.log(squareDigits(0));