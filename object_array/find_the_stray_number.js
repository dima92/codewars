function stray(numbers) {
  // return numbers
  //   .find((e) => numbers.filter((v) => v === e).length === 1)
  return numbers.reduce((a, b) => a ^ b)
}

console.log(stray([1, 1, 2]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));