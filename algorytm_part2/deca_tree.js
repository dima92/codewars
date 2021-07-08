function tree(trunks) {
  this.trunks = trunks;
  this.branches = trunks * 10;
  this.twigs = trunks * 100;
  this.leaves = trunks * 1000;
}

tree.prototype.chopTrunk = function (n) {
  this.trunks = Math.max(this.trunks - n, 0)
  this.chopBranch(n * 10)
}
tree.prototype.chopBranch = function (n) {
  this.branches = Math.max(this.branches - n, 0)
  this.chopTwig(n * 10)
}
tree.prototype.chopTwig = function (n) {
  this.twigs = Math.max(this.twigs - n, 0)
  this.chopLeaf(n * 10)
}
tree.prototype.chopLeaf = function (n) {
  this.leaves = Math.max(this.leaves - n, 0)
}

tree.prototype.describe = function () {
  return `This tree has ${this.trunks} trunks, ${this.branches} branches, ${this.twigs} twigs and ${this.leaves} leaves.`
}

  const myTree = new tree(10);

  myTree.chopLeaf(1)
  myTree.leaves(9999)
  myTree.chopTwig(1)
  myTree.twigs(999)
  myTree.leaves(9989)
  myTree.chopBranch(1)
  myTree.branches(99)
  myTree.twigs(989)
  myTree.leaves(9889)
  myTree.chopTrunk(1)
  myTree.trunks(9)
  myTree.branches(89)
  myTree.twigs(889)
  myTree.leaves(8889)
  myTree.describe('This tree has 9 trunks, 89 branches, 889 twigs and 8889 leaves.');