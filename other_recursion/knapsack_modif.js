


function knapsack(weights, maxWeight) {
    let combs = [];
    knapsackHelper(weights, maxWeight, 0, [], combs);
    return combs;
}

function knapsackHelper(weights, maxWeight, idx, comb, combs){
    if (maxWeight < 0){
        return
    } 
    if (idx === weights.length){
        combs.push(comb.slice());
        return
    }
    let new_w = weights[idx];
    comb.push(new_w);
    knapsackHelper(weights, maxWeight-new_w, idx+1, comb, combs);
    comb.pop();
    knapsackHelper(weights, maxWeight, idx+1, comb, combs);
}



let weights = [1, 2, 3, 0.5];
let max_weight = 4;

let combs = knapsack(weights, max_weight);

console.log(`For the following max_weight=${max_weight} and weights=${JSON.stringify(weights)}`);
for (let comb of combs){
    console.log(`possible comb is ${comb}`);
}
