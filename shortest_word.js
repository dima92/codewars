function findShort(s) {
  return s
    .split(' ')
    .sort((a, b) => b.length - a.length)
    .pop()
    .length;
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))
console.log(findShort('turns out random test cases are easier than writing out basic ones'));
console.log(findShort('Let\'s travel abroad shall we'));