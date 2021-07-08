function arrayDiff(a, b) {
  let diff = a.filter(x => !b.includes(x))
  return diff
}

console.log(arrayDiff([], [4, 5]));
console.log(arrayDiff([3, 4], [3]));
console.log(arrayDiff([1, 8, 2], []));
console.log(arrayDiff([1, 2, 3], [1, 2]));