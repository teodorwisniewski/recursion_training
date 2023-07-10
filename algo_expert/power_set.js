



// TC O(n*2^n) SC O(n2^n)
function powerSet(arr){
    let subsets = [[]];
    for (let i=0; i<arr.length; i++){
        let el = arr[i];
        nb_of_iter = subsets.length;
        for (let j=0; j<nb_of_iter; j++){
            subset = subsets[j];
            newSubset = subset.concat([el]);
            subsets.push(newSubset);
        }
    }
    return subsets;
}



let arr = [1, 2, 3];
let subsets = powerSet(arr);

for (var i = 0; i < subsets.length; i++) {
    var subset = subsets[i];
    console.log(`Powerset is [${subset}]`)
}
