function runLengthEncoding(str) {
  let result = []

  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++
    } else {
      count++
      result.push([count, str[i]])
      count = 0
    }
  }
  return result
}

console.log(runLengthEncoding("hello world!"));
console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"));