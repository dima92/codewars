function squaresNeeded(grains) {
  const arr = [0]
  for (let i = 0; i < 63; i++) {
    arr.push(Math.pow(2, i))
  }
  for (let i = 0; i < 63; i++) {
    if (grains < arr[i]) {
      return i - 1
    }
  }
}