function uniteUnique(arr) {
    let unionArr = [...arguments].flat();
    let final = unionArr.filter((el, ind, arr) => arr.indexOf(el) === ind);
    return final;
}

// function uniteUnique(arr) {
//     return [...new Set([...arguments].flat())];
//   }
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);