function fakeBin(x) {
  return x
    .split('')
    .map((el) => el > 4 ? 1 : 0)
    .join('')
}

console.log(fakeBin('45385593107843568'));             //01011110001100111
console.log(fakeBin('509321967506747'));               //101000111101101
console.log(fakeBin('366058562030849490134388085'));   //011011110000101010000011011
