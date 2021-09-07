function sortByBit(arr) {
  arr.sort((a, b) => bit(a) - bit(b) || a - b)

  function bit(n) {
    return n.toString(2).split(1).length - 1
  }
}

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]));