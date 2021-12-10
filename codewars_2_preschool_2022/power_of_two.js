function isPowerOfTwo(n){
  return Number.isInteger(Math.log2(n))
}

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(4096));
console.log(isPowerOfTwo(5));
