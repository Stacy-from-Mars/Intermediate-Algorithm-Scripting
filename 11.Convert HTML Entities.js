function convertHTML(str) {
    const html = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    }
    return str.replace(/[&<>\"']/g, el => html[el]);
  }

//   function convertHTML(str) {
//     const html = {
//       "&": "&amp;",
//       "<": "&lt;",
//       ">": "&gt;",
//       '"': "&quot;",
//       "'": "&apos;"
//     };
//     return str
//       .split("")
//       .map(entity => html[el] || el)
//       .join("");
//   }
  
convertHTML("Dolce & Gabbana");