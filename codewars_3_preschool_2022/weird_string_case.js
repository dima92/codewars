function toWeirdCase(string) {
  return string
    .split(' ')
    .map((v, i) =>
      v.split('')
        .map((v, i) => i % 2 === 0
          ? v.toUpperCase()
          : v.toLowerCase())
        .join(''))
    .join(' ')
}

console.log(toWeirdCase('This'));
console.log(toWeirdCase('is'));
console.log(toWeirdCase('This is a test'));
