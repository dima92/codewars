function explode(s) {
  return s
    .replace(/\d/g, d => d.repeat(d))
}

console.log(explode('312'));
console.log(explode('102269'));
console.log(explode('000'));