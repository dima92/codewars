function strCount(obj) {
  let count = 0
  for (const i in obj) {
    if (typeof obj[i] == 'object') count += strCount(obj[i])
    if (typeof obj[i] == 'string') count += 1
  }
  return count
}

console.log(strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
  sixth: undefined,
  seventh: {}
}));  // 3
