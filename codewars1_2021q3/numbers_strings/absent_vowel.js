function absentVowel(x) {
  if (!x.match(/a/)) return 0
  if (!x.match(/e/)) return 1
  if (!x.match(/i/)) return 2
  if (!x.match(/o/)) return 3
  if (!x.match(/u/)) return 4
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"));
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"));