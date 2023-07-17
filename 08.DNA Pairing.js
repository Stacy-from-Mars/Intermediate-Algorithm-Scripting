function pairElement(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        str[i] === "G" ? arr.push(["G", "C"]) :
        str[i] === "C" ? arr.push(["C", "G"]) :
        str[i] === "A" ? arr.push(["A", "T"]) : arr.push(["T", "A"]);
    }
    return arr;
  }
  
pairElement("CTCTA");