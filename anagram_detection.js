var sort = function(str) {
  return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
}

var isAnagram = function(test, original) {
  return original.trim() === test.trim() ? false : sort(original) === sort(test);
};

//"foefet" is an anagram of "toffee"

//"Buckethead" is an anagram of "DeathCubeK"