


function permute(arr){
    let perms = [];
    let perm = [];
    permuteHelper(arr, perms, perm);
    return perms;
}

function permuteHelper(arr, perms, perm){
    if (arr.length === 0 && perm.length){
        perms.push(perm);
    } 

    for (var i = 0; i < arr.length; i++) {
        el = arr[i]
        let newArr = arr.slice(0,i).concat(arr.slice(i+1))
        let newPerm = perm.concat(el)
        permuteHelper(newArr, perms, newPerm)
    }
    console.log(`The array looks as follows [${arr}] and perm [${perm}]`)
}


let arr = [1, 2, 3];
let perms = permute(arr);

for (var i = 0; i < perms.length; i++) {
    var perm = perms[i];
    console.log(`perm is [${perm}]`)
}
