function isIsogram(str) {
  return !str.match(/([a-z]).*\1/i)
}

console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("isogram"));  //true
console.log(isIsogram("aba")); //false
console.log(isIsogram("moOse"));  //false
console.log(isIsogram("isIsogram")); //false
console.log(isIsogram(""));  //true