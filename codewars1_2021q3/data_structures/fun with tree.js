function arrayToTree(array) {
  return (function nodeFromIndex(i) {
    if (array[i] === undefined)
      return;
    return new TreeNode(array[i], nodeFromIndex(i * 2 + 1), nodeFromIndex(i * 2 + 2))
  })(0)
}