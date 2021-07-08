const rotateMatrix = arr => {
  return arr[0].map((val, index) => arr.map(row => row[index])).reverse()
}

console.log(rotateMatrix([[-1, 4, 5], [2, 3, 4]]))
