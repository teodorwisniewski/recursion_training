




// 1, 3, 6, 10, 15, 21, 28
function getNumberShortestPath(nbRows, nbColumns){
    if (nbRows === 1 || nbColumns === 1){
        return 1
    } 
    
    return getNumberShortestPath(nbRows-1, nbColumns) + getNumberShortestPath(nbRows, nbColumns-1)
}


console.log(`getFirstX \n ${getNumberShortestPath(3, 6)}`)