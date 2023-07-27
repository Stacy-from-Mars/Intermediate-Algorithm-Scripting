function steamrollArray(arr) {
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            list.push(...steamrollArray(arr[i]))
        } else {
        list.push(arr[i]);
        }
    }
    return list
}

// function steamrollArray(arr) {
//     let list = [].concat(...arr);
//     return list.some(Array.isArray) ? steamrollArray(list) : list;
// }
  
steamrollArray([1, [2], [3, [[4]]]]);