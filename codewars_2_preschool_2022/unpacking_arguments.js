const spread = (func, args) => func(...args)

console.log(spread(function (x, y) {
  return x + y
}, [1, 2]));
