function bingo(ticket, win) {
  let count = 0

  ticket.forEach(game => {
    if (game[0].includes(String.fromCharCode(game[1]))) {
      count++
    }
  })

  return (count >= win) ? "Winner!" : "Loser!"
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2));
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3));
