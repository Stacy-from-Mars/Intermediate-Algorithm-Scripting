// function sumAll(arr) {
//     let mySum = 0;
//     if (arr[0] > arr[1]) {
//         for(let i = arr[1]; i <= arr[0]; i++){
//         mySum += i;
//         }
//     } else {
//         for(let i = arr[0]; i <= arr[1]; i++){
//         mySum += i;
//         }
//     }
//     return mySum;
//   }

  function sumAll(arr) {
    let mySum = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++){
        mySum += i;
    }
    return mySum;
  }

  sumAll([1, 4]);