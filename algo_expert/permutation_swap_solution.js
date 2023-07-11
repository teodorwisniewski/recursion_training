

function permute(arr){
    let perms = [];
    let perm = [];
    permuteHelper(0, arr, perms);
    return perms;
}

function permuteHelper(idx, arr, perms){

    if (idx === arr.length-1){
        perms.push(arr.slice());
    } else{
        for (let j=idx; j<arr.length; j++){
            swap(arr, idx, j);
            permuteHelper(idx+1, arr, perms);
            swap(arr, j, idx);
        }
    }
}

function swap(arr, i, j){
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}









let arr = ['A', 'B', 'C'];
let perms = permute(arr);

for (var i = 0; i < perms.length; i++) {
    var perm = perms[i];
    console.log(`perm is [${perm}]`)
}
