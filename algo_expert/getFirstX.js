




// 1, 3, 6, 10, 15, 21, 28
function getFirstX(text, index=0){
    if (text[0] === "x"){
        return index
    }

    if (text.length === 1) {
        return undefined;
    } 
    
    return getFirstX(text.slice(1), index=index+1)
}


let text = "xelolcotx";
console.log(`getFirstX \n ${getFirstX(text)}`)