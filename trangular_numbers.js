




// 1, 3, 6, 10, 15, 21, 28
function getTrangularNumber(n){
    if (n === 1) {
        return 1;
    } 
    return n + getTrangularNumber(n-1)
}


let n = 7
console.log(`getTrangularNumber \n ${getTrangularNumber(n)}`)