
// function nodeDepths(root) {
//     depthSum = [0];
//     nodeDepthsHelper(root, depthSum, 0)
//     return depthSum[0]
// }

// function nodeDepthsHelper(node, depthSum, depth){

//     if(node === null){
//         return;
//     } else{
//         depthSum[0] += depth;
//         nodeDepthsHelper(node.left, depthSum, depth+1);
//         nodeDepthsHelper(node.right, depthSum, depth+1);
//     }
// }
  
function nodeDepths(root, depth=0) {
    if (root === null) return 0;

    return depth + nodeDepths(root.left, depth+1) + nodeDepths(root.right, depth+1)

}


class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  

    //     A
    //    / \
    //   B   C
    //  / \ / \
    // D   E F G
//    / \
//   X  Z
  let root = new BinaryTree('A');
  root.left = new BinaryTree('B');
  root.right = new BinaryTree('C');
  root.left.left = new BinaryTree('D');
  root.left.left.left = new BinaryTree('X');
  root.left.left.right = new BinaryTree('Z');
  root.left.right = new BinaryTree('E');
  root.right.left = new BinaryTree('F');
  root.right.right = new BinaryTree('G');

  console.log(`The depth sum is ${nodeDepths(root)}`)