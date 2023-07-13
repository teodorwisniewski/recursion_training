


// TC O(n) | SC O(N)
function invertBinaryTree(root) {
    
    queue = [root];
    while (queue.length){
        current = queue.shift()
        if (current === null){
            continue
        }
        swapLeftAndRight(current);
        queue.push(current.left);
        queue.push(current.right);
    }
    return root;
}


function swapLeftAndRight(tree){
    temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;
}


class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }


  function printTree(root, spaceCount = 0, label = 'Root: ') {
    // Base case: if the tree is empty, return
    if (root === null) {
      return;
    }
    
    // Create the indent spacing
    const indent = ' '.repeat(spaceCount);
    
    // Print the current node: includes the indent, label, and value
    console.log(`${indent}${label}${root.value}`);
    
    // Recurse on the left and right children, increasing the space count
    // to move further to the right for each level of depth
    printTree(root.left, spaceCount + 2, 'Left: ');
    printTree(root.right, spaceCount + 2, 'Right: ');
  }
  

  

    //     A
    //    /  \
    //   B     C
    //  / \   / \
    // D   E  F G
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


  printTree(root);


  inverted_tree = invertBinaryTree(root)
  printTree(inverted_tree);


  console.log(`\n\n The invertBinaryTree2\n`)
  let root2 = new BinaryTree('T');
  root2.left = new BinaryTree('W');
  printTree(root2);
  inverted_tree2 = invertBinaryTree(root2)
  printTree(inverted_tree2);