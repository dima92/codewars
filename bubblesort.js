let count = 0

function bubblesortOnce(a) {
  a = [...a]
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i + 1] < a[i]) {
      let tmp = a[i]
      a[i] = a[i + 1]
      a[i + 1] = tmp
    }
    count += 1
  }
  return a
}

console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]));
console.log(count)