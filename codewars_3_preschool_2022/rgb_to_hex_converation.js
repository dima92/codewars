const rgb = (r, g, b) => [r, g, b].map(x => {
  return ('0' + Math.max(0, Math.min(255, x))
    .toString(16))
    .slice(-2)
})
  .join('')
  .toUpperCase()

console.log(rgb(0, 0, 0));
console.log(rgb(0, 0, -20));
console.log(rgb(300, 255, 255));
console.log(rgb(173, 255, 47));
