const nbDig = (n, d) => {
  const squaredNumbers = []
  for (let k = 0; k <= n; k++) squaredNumbers.push(String(k ** 2))

  return squaredNumbers.reduce((totalDigits, number) => totalDigits + number
    .split('')
    .reduce((totalOnes, number_) => (Number(number_) === d ? totalOnes + 1 : totalOnes), 0), 0)
}

console.log(nbDig(5750, 0));
console.log(nbDig(11011, 2));
console.log(nbDig(12224, 8));
console.log(nbDig(11549, 1));
