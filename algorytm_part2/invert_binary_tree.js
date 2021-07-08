class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const isBST = node => {
  const arr = inOrder(node);

  return arr.every((v, i, a) => i == 0 ? true : v > a[i - 1])
    || arr.every((v, i, a) => i == 0 ? true : v < a[i - 1]);

  function inOrder(node) {
    if (node == undefined) return [];
    return inOrder(node.left).concat(node.value).concat(inOrder(node.right));
  }
};

const T = (v, l, r) => new Node(v, l, r)
console.log(isBST(T(5, T(2, T(1), T(3)), T(7, null, T(9)))))
console.log(isBST(isBST(T(7, T(9), T(2)))))
console.log(isBST(T(1, T(2), T(3))))
console.log(isBST(T(5, T(2, null, T(7)), T(9))))