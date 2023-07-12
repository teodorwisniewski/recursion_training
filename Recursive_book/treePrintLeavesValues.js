



function getLeaves(node){
    // Get leaves values from left to right

    let leavesValues = [];
    getLeavesHelper(node, leavesValues);
    return leavesValues;

}


function getLeavesHelper(node, leavesValues){
    
    if (node===null){
        return
    } else{
        console.log(`Traversing the node=${node.value}`)
        if (Object.keys(node).every(key => node[key] === null || key === 'value')) {
            leavesValues.push(node.value)
        }
        for (let key in node){
            if (key == 'value') continue;
            childNode = node[key];
            getLeavesHelper(childNode, leavesValues)
        }
    }
}



//      A
//     / \
//    B   C
//   / \ / \
// D   O Z  K
//        \
//         R



let tree = {
    value: "A",
    left: {
      value: "B",
      left: {
        value: "D",
        left: null,
        right: null
      },
      right: {
        value: "O",
        left: null,
        right: null
      }
    },
    right: {
      value: "C",
      left: {
        value: "Z",
        left: null,
        right:  {
            value: "R",
            left: null,
            right: null
          }
      },
      right: {
        value: "K",
        left: null,
        right: null
      }
    }
  }
  

  res = getLeaves(tree)
  console.log(res)