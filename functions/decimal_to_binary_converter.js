function decToBin(d) {
  return d >> 1 ? decToBin(d >> 1) + String(d & 1) : String(d)
}

console.log(decToBin(0));
console.log(decToBin(1));
console.log(decToBin(2));
console.log(decToBin(3));
console.log(decToBin(21));
console.log(decToBin(31));