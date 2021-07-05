function filterHomogenous(arrays) {
  return arrays
    .filter(b => b.length > 0 && b.every(e => typeof e === typeof b[0]))
}

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));
console.log(filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []]));