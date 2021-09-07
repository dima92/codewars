const validWord = function (dictionary, word) {
  let reg = new RegExp('^(' + dictionary.join('|') + ')+$');
  return reg.test(word)
};

console.log(validWord(["code", "wars"], "codewars"));
console.log(validWord(["code", "wars"], "codewar"));