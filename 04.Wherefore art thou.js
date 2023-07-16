function whatIsInAName(collection, source) {
    let sourceKeys = Object.keys(source)
    return collection.filter(el => sourceKeys.every(key => el.hasOwnProperty(key) && el[key] === source[key]));
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });