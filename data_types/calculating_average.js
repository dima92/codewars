const Calculator = {
  average: function (...n) {
    let sum = 0
    for (let i = 0; i < n.length; i++) {
      sum += n[i]
    }
    return n.length ? sum / n.length : 0
  }
}

console.log(Calculator.average(3, 4, 5));