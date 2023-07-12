




function branchSums(root) {
    let sums = [];
    branchSumsHelper(root, sums );
    return sums;
}


function branchSumsHelper(node, sums, sum=0){
    if (!node) return;

    sum += node.value;
    if (!node.left && !node.right){
        sums.push(sum)
        return;
    } 

    
    branchSumsHelper(node.left, sums, sum);
    branchSumsHelper(node.right, sums, sum);
    
}












//     1
//    / \
//   2   3
//  / \  / \
// 4   5 6 7




class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  let root = new BinaryTree(1);
  root.left = new BinaryTree(2);
  root.right = new BinaryTree(3);
  root.left.left = new BinaryTree(4);
  root.left.right = new BinaryTree(5);
  root.right.left = new BinaryTree(6);
  root.right.right = new BinaryTree(7);

  console.log(`The branchSums is ${branchSums(root)}`)