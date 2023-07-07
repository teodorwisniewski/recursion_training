


function permute_helper(arr, perms, currPerm){
    if (arr.length === 0 && currPerm){
        perms.push(currPerm);
        return        
    }
    
    for (let i=0; i < arr.length; i++){
        let newArr = arr.slice(0, i).concat(arr.slice(i+1))
        let newPerm = [...currPerm, arr[i]]
        permute_helper(newArr, perms, newPerm)
    }

}


function getPermutations(array) {
    perms = [];
    if (!array.length){
        return perms
    }
    permute_helper(array, perms, [])
    return perms;
  }




let arr1 = [1, 2, 3];

perms  = getPermutations(arr1);
for (let i=0; i < perms.length; i++){
    permut = perms[i];
    console.log(`${i+1} Permuation is ${permut}`)
}

