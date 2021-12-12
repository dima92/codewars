const whatTimeIsIt = function (angle) {
  mins = angle * 2
  h = Math.floor(mins / 60)
  m = Math.floor(mins % 60)
  if (h == 0) {
    h = '12'
  }
  if (h < 10) {
    h = '0' + h
  }
  if (m < 10) {
    m = '0' + m
  }
  return h + ":" + m;
}

console.log(whatTimeIsIt(0));
console.log(whatTimeIsIt(90));
console.log(whatTimeIsIt(180));
console.log(whatTimeIsIt(270));
console.log(whatTimeIsIt(360));
