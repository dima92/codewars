const capitalizeWord = word =>
  `${word[0].toUpperCase()}${word.slice(1, word.length)}`

console.log(capitalizeWord('word'));      //Word
console.log(capitalizeWord('i'));         //I
console.log(capitalizeWord('glasswear')); //Glasswear
