function vowelOne(s) {
  return (s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1'))
}

console.log(vowelOne("vowelOne"));
console.log(vowelOne("\"123, arou\" "));
