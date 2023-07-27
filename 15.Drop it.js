function dropElements(arr, func) {
    let origin = arr.length
    for (let i = 0; i < origin; i++) {
        if(func(arr[0])) {
            break;
        } else {
            arr.shift()
        }
    } 
    return arr
}

// function dropElements(arr, func) {
//     let ind = arr.findIndex(func);
//     return arr.slice(ind >= 0 ? ind : arr.length)
// }
  
dropElements([1, 2, 3], function(n) {return n < 3; });