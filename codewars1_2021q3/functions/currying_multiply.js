function multiplyAll(arr) {
  return function (num) {
    return arr.map(v => v * num)
  }
}

console.log(multiplyAll([1, 2, 3])(2));