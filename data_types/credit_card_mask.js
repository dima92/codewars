function maskify(cc) {
  return '#'.repeat(Math.max(0, cc.length - 4)) + cc.slice(-4)
}


console.log(maskify("4556364607935616"));
maskify("64607935616")
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));