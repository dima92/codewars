function indexEqualsValue(a) {
  // for (let i = 0; i < a.length; i++) {
  //   if (a[i] === i)
  //     return i
  // }
  // return -1
  let low = 0, high = a.length - 1
  while (low < high) {
    let i = Math.floor((low + high) / 2);

    if (i <= a[i]) {
      high = i
    } else {
      low = i + 1
    }
  }
  return a[high] === high ? high : -1
}

console.log(indexEqualsValue([-8, 0, 2, 5]));
console.log(indexEqualsValue([-1, 0, 3, 6]));
console.log(indexEqualsValue([-3, 0, 1, 3, 10]));
console.log(indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]));
console.log(indexEqualsValue([9, 10, 11, 12, 13, 14]));
console.log(indexEqualsValue([0]));