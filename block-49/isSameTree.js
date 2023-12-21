let treeP = [];
let treeQ = [];

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function createBinaryTree(data, left, right) {
  let tree = new TreeNode(data);
  tree.left = new TreeNode(left);
  tree.right = new TreeNode(right);

  return tree;
}

function sameTree(p, q) {
  if (p !== null && q !== null) {
    sameTree(p.left, q.left);
    treeP.push(p.data);
    treeQ.push(q.data);
    sameTree(p.right, q.right);
  }
}

function isSameTree() {
  let tree1 = createBinaryTree(1, 2, 3);
  let tree2 = createBinaryTree(1, 2, 3);

  sameTree(tree1, tree2);
  if (treeP.length !== treeQ.length) return false;
  for (let i = 0; i < treeP.length; i++) {
    if (treeP[i] !== treeQ[i]) {
      return false;
    }
  }
  return true;
}

console.log(isSameTree());
