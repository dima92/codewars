function fizz_buzz(n) {
  let array = [];
  let Fizz, Buzz, i

  for (i = 1; i <= n; i++) {
    Fizz = i % 3 === 0 ? 'Fizz' : '';
    Buzz = i % 5 === 0 ? 'Buzz' : '';
    array.push(Fizz || Buzz ? Fizz + Buzz : i)
  }
  return array;
}

console.log(fizz_buzz(100))