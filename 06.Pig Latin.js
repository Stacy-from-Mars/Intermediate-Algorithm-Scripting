function translatePigLatin(str) {
    if (str[0].match(/[euioa]/)) {
        return str += "way";
    } else {
        let i = 0;
        let cons = "";
        let chars = str.split("");
        for (let ch of chars){
            if (chars[i].match(/[euioa]/)) {
                break;
            }
            cons += ch;
            i++;
        }
        return chars.slice(i).join("") + cons + "ay";
    }
  }
  
// function translatePigLatin(str) {
//   let regex = /^[^aeiou]+/;
//   let cons = str.match(regex);
//   return cons !== null
//     ? str
//         .replace(regex, "")
//         .concat(cons)
//         .concat("ay")
//     : str.concat("way");
// }

translatePigLatin("consonant");
