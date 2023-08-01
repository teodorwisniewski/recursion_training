





class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function printTreeStructure(root) {
    if (!root) {
        return;
    }

    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            process.stdout.write(node.val + ' ');

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        console.log();  // Move to the next level after printing the current level
    }
}



/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    let dp = {
        0: [],
        1: [new TreeNode()]
    }
    return backtrack(n, dp);
};


function backtrack(n, dp){
    if (n in dp){
        return dp[n];
    }
    let res = [];
    let r;
    let leftTrees;
    let rightTrees;
    for (let l=0; l < n; l++){
        r = n - l - 1;
        leftTrees = backtrack(l, dp);
        rightTrees = backtrack(r, dp);
        combineTrees(res, leftTrees, rightTrees);
    }
    dp[n] = res;
    return res;
}


function combineTrees(trees, leftTrees, rightTrees){
    let newTree;
    for (let leftTree of leftTrees){
        for (let rightTree of rightTrees){
            newTree = new TreeNode(0);
            newTree.left = leftTree;
            newTree.right = rightTree;
            trees.push(newTree);
        }
    }
}


let res = allPossibleFBT(3);
console.assert(res.length === 5, "The length of res is not 5!");
for (let i = 0; i < res.length; i++) {
    console.log(`\nSolution ${i+1}`);
    printTreeStructure(res[i]);
}
