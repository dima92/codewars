const combine = (...objects) => objects.reduce((result, object) => {
  for (const key in object) {
    if (result[key]) {
      result[key] += object[key]
    } else result[key] = object[key]
  }
  return result
}, {})

const objA = {a: 10, b: 20, c: 30}
const objB = {a: 3, c: 6, d: 3}
const objC = {a: 5, d: 11, e: 8}
const objD = {c: 3}

console.log(combine(objA, objB));
console.log(combine(objA, objC));
console.log(combine(objA, objB, objC));
console.log(combine(objA, objC, objD));
console.log(combine({}, {}, {}));
console.log(combine(objA, objC, {}));
