function fearNotLetter(str) {
    let letter;
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i + 1) - str.charCodeAt(i) === 2) {
            letter = str.charCodeAt(i + 1)
            return String.fromCharCode(letter - 1)
        }
    }
    return undefined
  }
  
  fearNotLetter("abce");