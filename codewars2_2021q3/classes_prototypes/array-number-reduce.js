Array.prototype.reduce = function (process, initial) {
  if (!initial) {
    typeof this[0] === 'string' ? (initial = '') : (initial = 0)
  }
  for (let i = 0; i < this.length; i++) {
    initial = process(initial, this[i])
  }
  return initial
}
