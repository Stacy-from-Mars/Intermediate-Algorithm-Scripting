function smallestCommons(arr) {
    const [min, max] = arr.sort((a, b) => a - b);
    let res = max;
    for (let i = max; i >= min; i--) {
        if(res % i !== 0) {
            res += max;
            i = max
        }
    }
    return res;
}

// function smallestCommons(arr) {
//     let [min, max] = arr.sort((a, b) => a - b);
//     let list = [];
//     let res = 1;
//     let num = min;
//     for (let i = min; i <= max; i++) {
//         list.push(i);
//     }
//     for (let j = 1; j < list.length; j++) {
//         while (num % list[j] !== 0) {
//             res++;
//             num = res * min
//         }
//         min = num;
//         res = 1
//     }
//     return num;
//   }
  
  console.log(smallestCommons([1,5]));