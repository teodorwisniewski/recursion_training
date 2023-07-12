


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
  