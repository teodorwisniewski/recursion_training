




function findLetter(node, letter){

    occurences = {};
    occurences[letter] = 0;   
    helperFindLetter(node, letter, occurences)
    return occurences
}

function helperFindLetter(node, letter, occurences){
    
    
    if (node === null){
        return 
    } else {
        if (node.value === letter){
            occurences[letter] += 1
        } 
        console.log(`Traversing tree at node ${node.value}`)
        for (let key in node){
            if (key === 'value') continue;
            childNode = node[key]
            helperFindLetter(childNode, letter, occurences)
        }
    }
    
}




//      A
//     / \
//    B   C
//   / \ / \
// D   E Z  G
//        \
//          B



let tree = {
    value: "B",
    left: {
      value: "B",
      left: {
        value: "D",
        left: null,
        right: null
      },
      right: {
        value: "E",
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
            value: "B",
            left: null,
            right: null
          }
      },
      right: {
        value: "G",
        left: null,
        right: null
      }
    }
  }
  

  res = findLetter(tree,"B", {})
  console.log(res)