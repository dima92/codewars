function repeatStr(n, s) {
  const res = []
  while (res.length < n) {
    res.push(s)
  }
  return res.join('')
}

console.log(repeatStr(3, '*'));
console.log(repeatStr(5, '#'));
console.log(repeatStr(2, 'ha'));
