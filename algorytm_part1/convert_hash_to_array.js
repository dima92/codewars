function convertHashToArray(hash) {
  return Object.entries(hash).sort()
}

console.log(convertHashToArray({name: "Jeremy"}));
console.log(convertHashToArray({name: "Jeremy", age: 24}));
console.log(convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}));
console.log(convertHashToArray({product: "CodeWars", powerLevelOver: 9000}));
console.log(convertHashToArray({}));