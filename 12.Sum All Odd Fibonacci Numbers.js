function sumFibs(num) {
    let prev = 0;
    let curr = 1;
    let fibo = [prev, curr];
    for(let i = 2; i <= num; i++){
        let res = prev + curr;
        prev = curr;
        curr = res;
        fibo.push(res)
    }
    return fibo.filter(el => el <= num && el % 2).reduce((a, b) => a + b);
}

sumFibs(4);