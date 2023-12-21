class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
function newNode(data) {
  return new Node(data);
}

let root = newNode(2);
root.left = newNode(1);
root.right = newNode(3);
root.left.left = newNode(4);
root.right.left = newNode(5);
root.right.left.left = newNode(6);

function searchBottomLeftValue(root){
    if(root !== null) return;
}
