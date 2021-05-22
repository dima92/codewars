function isPalindrome(line) {
  if (typeof line === 'string') {
    return line === line.split('').reverse().join('')
  } else {
   return line === +line.toString().split('').reverse().join('')
  }
}

//isPalindrome("anna")   ==> true
//isPalindrome("walter") ==> false
//isPalindrome(12321)    ==> true
//isPalindrome(123456)   ==> false