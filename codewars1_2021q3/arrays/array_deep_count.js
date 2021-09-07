function deepCount(a) {
  return a.reduce((acc, v) =>
      acc + (Array.isArray(v)
        ? deepCount(v)
        : 0),
    a.length)
}

console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));