function distinct(a) {
  return a.filter((item, pos) => a.indexOf(item) === pos)
}

console.log(distinct([1]));
console.log(distinct([1, 2]));
console.log(distinct([1, 1, 2]));