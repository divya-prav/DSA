class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function totalNodes(root) {
  if (root === null) {
    return 0;
  }

  let l = totalNodes(root.left);
  let r = totalNodes(root.right);

  return 1 + l + r;
}

function newNode(data) {
  return new Node(data);
}

let root = newNode(10);
root.left = newNode(11);
root.right = newNode(12);
root.left.left = newNode(13);
root.left.right = newNode(14);
root.right.left = newNode(15);
root.right.right = newNode(16);

console.log(totalNodes(root));
