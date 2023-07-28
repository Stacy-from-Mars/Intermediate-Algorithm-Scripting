function addTogether() {
    let [first, second] = arguments;
    
    function addSecond(second) {
        return typeof(second) !== "number" ? undefined : first + second;
    } 
    return  typeof(first) !== "number" ? undefined :
            arguments.length === 2 ? addSecond(second) : addSecond;
}

// function addTogether() {
//     let [first, second] = arguments;
//     if (typeof (first) == "number") {
//         if(typeof (second) == "number") {
//         return first + second;
//         }
//         if (arguments.length === 1) {
//         return (second) => addTogether(first, second);
//         }
//     }
//   }

addTogether(2)([3]);