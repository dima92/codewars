const countBits = function (n) {
  const base = (n).toString(2).split('')
  const result = base.reduce((sum, num) => sum + Number(num), 0)
  return result
};

console.log(countBits(0));  // 0
console.log(countBits(4));  // 1
console.log(countBits(7));  // 3
console.log(countBits(9));  // 2
console.log(countBits(10)); // 2
