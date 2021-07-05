function add(x) {
  return function (y) {
    return x + y
  }
}

console.log(add(2)(5));
console.log(add(14)(25));