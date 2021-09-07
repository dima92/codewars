function nicknameGenerator(name) {
  if (name.length < 4) return 'Error: Name too short'
  if (name[2].match(/[aeuio]/)) return name.slice(0, 4)
  return name.slice(0, 3)
}

console.log(nicknameGenerator("Jimmy"));
console.log(nicknameGenerator("Samantha"));
console.log(nicknameGenerator("Sam"));
console.log(nicknameGenerator("Kayne"));
console.log(nicknameGenerator("Melissa"));
console.log(nicknameGenerator("James"));