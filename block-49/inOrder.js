class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
let inOrderTraversal = [];
function createBinaryTree() {
  let tree = new TreeNode(1);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(3);
  tree.left.left = new TreeNode(4);
  tree.left.right = new TreeNode(5);
  return tree;
}

function inOrder(tree) {
  if (tree !== null) {
    inOrder(tree.left);
    inOrderTraversal.push(tree.data);
    inOrder(tree.right);
  }
}

let binaryTree = createBinaryTree();
inOrder(binaryTree);
console.log(inOrderTraversal);