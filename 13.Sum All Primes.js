function sumPrimes(num) {
    let list = [];
    let prim = [];
    let limit = Math.sqrt(num);
    for (let i = 0; i <= num; i++) {
        list.push(true);
    }
    for (let i = 2; i <= limit; i++) {
        if(list[i]) {
        for (let j = i * i; j <= num; j += i) {
            list[j] = false;
        }
    }
  }
  for (let i = 2; i <= num; i++) {
    if(list[i]) {
        prim.push(i)
    }
  }
  return prim.reduce((a, b) => a + b, 0)
}

// function sumPrimes(num) {
//     let prim = Array(num + 1).fill(true);
//     prim[0] = false;
//     prim[1] = false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (prim[i]) {
//         for (let j = i * i; j <= num; j += i)
//           prim[j] = false;
//       }
//     }
//     return prim.reduce((a, b) => a + b, 0)
// }

sumPrimes(10);