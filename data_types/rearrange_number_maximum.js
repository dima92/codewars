function maxRedigit(num) {
  if (num < 100 || num > 999) {
    return null
  } else {
    return +num
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  }
}

console.log(maxRedigit(123));
console.log(maxRedigit(-1));
console.log(maxRedigit(0));