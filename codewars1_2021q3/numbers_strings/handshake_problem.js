function getParticipants(handshakes) {
  if (handshakes < 3) return handshakes + 1
  let sum = 0
  for (let i = 0; i < handshakes; i++) {
    sum += i
    if (sum >= handshakes) return i + 1
  }
}

console.log(getParticipants(0));  //1
console.log(getParticipants(1));  //2
console.log(getParticipants(3));  //3
console.log(getParticipants(6));  //4
console.log(getParticipants(7));  //5