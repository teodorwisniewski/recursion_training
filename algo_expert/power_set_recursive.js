



// TC O(n*2^n) SC O(n2^n)
// function powerSet(arr, idx=null){
//     if (idx === null){
//         idx = 0;
//     }
//     if (idx === arr.length){
//         return [[]]
//     }
//     let el = arr[idx];
//     let subsets = powerSet(arr, idx+1)
//     let subsetsLen = subsets.length;
//     for (var i = 0; i < subsetsLen; i++) {
//         newSubset = subsets[i].concat([el]);
//         subsets.push(newSubset);
//     }
//     return subsets;
// }

function powerSet(arr, idx=null){
    if (idx === null){
        idx = arr.length - 1;
    }
    if (idx < 0){
        return [[]];
    }
    let el = arr[idx];
    let subsets = powerSet(arr, idx-1)
    let subsetsLen = subsets.length;
    for (var i = 0; i < subsetsLen; i++) {
        newSubset = subsets[i].concat([el]);
        subsets.push(newSubset);
    }
    return subsets;
}




let arr = [1, 2, 3];
let subsets = powerSet(arr);

for (var i = 0; i < subsets.length; i++) {
    var subset = subsets[i];
    console.log(`Powerset is [${subset}]`)
}
