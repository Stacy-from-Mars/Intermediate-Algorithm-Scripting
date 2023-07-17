function myReplace(str, before, after) {
    let b = str.indexOf(before);
    let a = after.replace(after[0], after[0].toUpperCase())
    if (str[b].match(/^[A-Z]/)) {
        return str.replace(before, a);
    }
    return str.replace(before, after.toLowerCase());
  }
  
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
