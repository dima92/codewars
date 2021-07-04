function findSquares(num) {
  let max = Math.ceil(num / 2)
  let min = max - num
  return `${Math.pow(max, 2)}-${Math.pow(min, 2)}`
}

console.log(findSquares(9));
console.log(findSquares(5));