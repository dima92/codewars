function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}

console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"));
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"));