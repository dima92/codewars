sortme = function (names) {
  let len = names.length
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (names[j - 1] > names[j]) {
        let temp = names[j - 1]
        names[j - 1] = names[j]
        names[j] = temp
      }
    }
  }
  return names
}

console.log(sortme(['one', 'two', 'three']));