function smallestCommons(arr) {
    let newArr = arr.sort((a, b) => a - b);
    let list = [];
    for (let i = newArr[0]; i <= newArr[1]; i++) {
        list.push(i);
    // for (let i = arr[0]; i <= Math.sqrt(arr[1]); i++) {
    //   if (list[i]) {
    //     for (let j = i * i; j <= arr[1]; j += i)
    //        list[j] = false;
    //    }
     }
    return list;
  }
  
  console.log(smallestCommons([1,5]));