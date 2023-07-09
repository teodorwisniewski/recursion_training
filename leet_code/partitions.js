


function getNbPartitions(n, partitionSize){
    if (n === 0){
        return 1;
    }else if (partitionSize === 0 || n < 0){
        return 0;
    } 
 
    return getNbPartitions(n-partitionSize, partitionSize) + getNbPartitions(n, partitionSize-1);
}


let n = 6;
let m = 4;

console.log(`Nb of elements ${n}, partition size ${m} partition size is ${getNbPartitions(n, m)}`)

