function destroyer(arr) {
    let toRemove = Array.from(arguments).slice(1);
    return arr.filter(el => toRemove.indexOf(el) == -1)
  }
//   function destroyer(arr, ...toRemove) {
//     return arr.filter(elem => !valsToRemove.includes(elem));
//   }

  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));