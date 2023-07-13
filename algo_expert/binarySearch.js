

function binarySearch(array, target, tracked_index=0) {

    let midIndex = Math.floor(array.length / 2)

    if (array[midIndex] > target && array.length > 2){
        return binarySearch(array.slice(0,midIndex), target, tracked_index);
    } else if(array[midIndex] < target && array.length > 2){
        return binarySearch(array.slice(midIndex), target, tracked_index+midIndex);
    } else if (array[midIndex] == target){
        return midIndex+tracked_index
    } else if (array[midIndex-1] == target){
        return midIndex-1+tracked_index
    }
    return -1;

  }


array = [0, 1, 21, 33, 45, 45, 61, 72];
target = -4;

let foundIndex = binarySearch(array, target)
console.log(`The ${target} is at the index of ${foundIndex} = ${array[foundIndex]}`)