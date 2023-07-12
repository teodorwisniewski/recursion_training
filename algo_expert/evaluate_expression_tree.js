


function roundHalfDown(number){
    if (number>0){
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}



const operations = {
    "-1": (a, b) => a + b,
    "-2": (a, b) => a - b,
    "-3": (a, b) => roundHalfDown(a / b),
    "-4": (a, b) => a * b,    
}




function evaluateExpressionTree(node) {
    if (!node) return;

    if (node.value && !operations.hasOwnProperty(node.value))
    {
        return node.value;
    }
    let leftValue = evaluateExpressionTree(node.left);
    let rightValue = evaluateExpressionTree(node.right);
    
    if (operations.hasOwnProperty(node.value)){
        return operations[node.value](leftValue, rightValue)
    }

    return -1;
  }






//        -1
//       / \
//     -2   -3
//    / \   / \
//   -4  2 8  4
//  / \
// 2   3


class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  let root = new BinaryTree(-1);
  root.left = new BinaryTree(-2);
  root.left.right = new BinaryTree(2);
  root.right = new BinaryTree(-3);
  root.right.left = new BinaryTree(8);
  root.right.right = new BinaryTree(4);
  root.left.left = new BinaryTree(-4);
  root.left.left.left = new BinaryTree(2);
  root.left.left.right = new BinaryTree(3);


//   console.log(`The evaluateExpressionTree is ${evaluateExpressionTree(root)}`)



  const inputData = {
    "tree": {
      "nodes": [
        {"id": "1", "left": "9", "right": "3", "value": -3},
        {"id": "9", "left": null, "right": null, "value": 9},
        {"id": "3", "left": "4", "right": "6", "value": -2},
        {"id": "4", "left": null, "right": null, "value": 4},
        {"id": "6", "left": null, "right": null, "value": 6}
      ],
      "root": "1"
    }
  }
  
  const idNodeMap = new Map();
  
  // Step 1: Create nodes for all entries and add them to the map.
  for (const nodeData of inputData.tree.nodes) {
      const node = new BinaryTree(nodeData.value);
      idNodeMap.set(nodeData.id, node);
  }
  
  // Step 2: Link all nodes based on left and right ids.
  for (const nodeData of inputData.tree.nodes) {
      const node = idNodeMap.get(nodeData.id);
      
      if (nodeData.left !== null) {
          node.left = idNodeMap.get(nodeData.left);
      }
  
      if (nodeData.right !== null) {
          node.right = idNodeMap.get(nodeData.right);
      }
  }
  
  // Step 3: Get the root node.
root = idNodeMap.get(inputData.tree.root);


//  divide
// /  \
// 9   -
//    / \
//   4   6


//  -3
// /  \
// 9   -2
//    / \
//   4   6



  console.log(`\n The evaluateExpressionTree2 is ${evaluateExpressionTree(root)}`)