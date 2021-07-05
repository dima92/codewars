function euclideanDistance(point1, point2) {
  let total = 0, diff
  for (let i = 0; i < point1.length; i++) {
    diff = point2[i] - point1[i]
    total += diff * diff
  }
  return Number(Math.sqrt(total).toFixed(2))
}

console.log(euclideanDistance([-1, 2], 3));
console.log(euclideanDistance([-1, 2], 3.61));
console.log(euclideanDistance([-1, 2], 5.39));