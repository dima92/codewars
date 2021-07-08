function getMatrix(number) {
  return Array(number).fill(0).map((elem, i) => {
    return Array(number).fill(0).map((elem2, j) => {
      return 1 - Math.min(Math.abs(i - j), 1)
    })
  })
}

console.log(getMatrix(1));
console.log(getMatrix(2));
console.log(getMatrix(5));
