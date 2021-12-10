const ArrowFunc = function (arr) {
  return arr.map(char => String.fromCharCode(char)).join('')
}

console.log(ArrowFunc([84, 101, 115, 116]));
console.log(ArrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72]));
