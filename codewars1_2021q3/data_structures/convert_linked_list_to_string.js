function stringify(list) {
  return list  === null ? 'null' : `${list.data} -> ${stringify(list.next)}`
}

console.log(stringify(new Node(1, new Node(2, new Node(3)))));
console.log(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))));