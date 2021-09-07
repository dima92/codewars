function tickets(peopleInLine) {
  let cashBox = {
    25: 0,
    50: 0,
    100: 0
  }

  for (let i = 0; i < peopleInLine.length; i++) {

    if (peopleInLine[i] === 25) {
      cashBox[25]++;
    } else if (peopleInLine[i] === 50) {
      if (cashBox[25] !== 0) {
        cashBox[25]--;
        cashBox[50]++;
      } else return "NO";
    } else if (peopleInLine[i] === 100) {
      if (cashBox[25] !== 0 && cashBox[50] !== 0) {
        cashBox[25]--;
        cashBox[50]--;
        cashBox[100]++;
      } else if (cashBox[25] > 2) {
        cashBox[25] = cashBox[25] - 3;
        cashBox[100]++;
      } else return "NO";
    }
  }
  return "YES";
}

console.log(tickets([25, 25, 50]));
console.log(tickets([25, 100]));
console.log(tickets([25, 25, 50, 50, 100]));