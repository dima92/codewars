const sortMyString = s =>
  s
    .split('')
    .reduce(
      (result, char, index) => {
        result[index % 2] += char
        return result
      },
      ['', '']
    )
    .join(' ')

console.log(sortMyString("CodeWars"));
console.log(sortMyString("YCOLUE'VREER"));
