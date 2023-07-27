function binaryAgent(str) {
    return str.split(" ").map(el => String.fromCharCode(parseInt(el, 2))).join("");  //String.fromCharCode(...str.split(" ").map(el => parseInt(el, 2)))
}

// function binaryAgent(str) {
//     let bin = str.split(" ");
//     let code = [];
//     for (let i = 0; i < bin.length; i++) {
//         code.push(String.fromCharCode(parseInt(bin[i], 2)))
//     }
//     return code.join("")
// }
  
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");