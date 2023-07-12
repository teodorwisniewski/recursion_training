
// In this function, findNode takes the current node and a target value as parameters. It first checks if the node exists (if it's not null). If it doesn't, it returns false, as this means we've reached the end of a branch without finding the target value.

// If the node does exist, it checks if the node's value matches the target value. If it does, it returns true.

// If the node's value doesn't match the target, it recursively searches the node's left and right subtrees. The || operator ensures that as soon as a match is found in either subtree, the function returns true without further traversal.


// function nodeExists(node, targetValue) {
//     if (node == null) {
//       // Base case: if we've reached the end of a branch without finding the value, return false
//       return false;
//     }
//     if (node.value === targetValue) {
//       // If the current node's value matches the target, return true
//       return true;
//     }
  
//     // If the current node's value does not match the target, continue to search the left and right subtrees
//     return findNode(node.left, targetValue) || findNode(node.right, targetValue);
//   }
  
//   console.log(nodeExists(tree, "Z")); // Output: true
//   console.log(nodeExists(tree, "Y")); // Output: false







function nodeExists(node, targeValue){

    if (node.value === targeValue){
        return true
    }

    for (let child of node["children"]){

        if (nodeExists(child, targeValue)){
            return true
        }
    }

    return false


}


//    A
//   / \
//  B     C
//  / \ / \
// D   O Z K
//       |
//       R


let tree = {
    value: "A",
    children: [
      {
        value: "B",
        children: [
          { value: "D", children: [] },
          { value: "O", children: [] }
        ]
      },
      {
        value: "C",
        children: [
          { 
            value: "Z", 
            children: [
              { value: "R", children: [] }
            ]
          },
          { value: "K", children: [] }
        ]
      }
    ]
  }


  console.log(`Looking for K and nodeExists: ${nodeExists(tree, 'K')}`)
  console.log(`Looking for X and nodeExists: ${nodeExists(tree, 'X')}`)
  