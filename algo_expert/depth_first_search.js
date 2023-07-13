class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
    

    // TC O(v+e) SC O(v)
    depthFirstSearch(array) {
      array.push(this.name)
      for (let i=0; i<this.children.length; i++){
        let child = this.children[i]
        child.depthFirstSearch(array)
      }
      return array;
    }

    
  }

//   A
//   ├─>
//   B
//     ├─>
//     D
//       └─>
//         H
//     └─>
//     E
//   └─>
//   C
//     ├─>
//     F
//     └─>
//     G


  let rootNode = new Node('A');
rootNode.addChild('B').addChild('C');
rootNode.children[0].addChild('D').addChild('E');
rootNode.children[1].addChild('F').addChild('G');
rootNode.children[0].children[0].addChild('H');

res = rootNode.depthFirstSearch([])

console.log(res)
  