

function findLetter(tree, letter, level=0){


    if (tree === null){
        return false;
    }
    console.log(`Look up ${tree.value}`);
    if(tree.value === letter){
    {
        return `The letter ${letter} has been found at the level ${level}`;
    }    
        
    }
    return findLetter(tree.right, letter, level+1) || findLetter(tree.left, letter, level+1);
    
}




//   A
//  / \
//  B   C
//   / \ / \
// D   E Z  G
//        \
//          F



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
            value: "F",
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
  

  res = findLetter(tree,"C")
  console.log(res)