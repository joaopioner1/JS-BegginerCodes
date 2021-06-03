function somar(limite) {
    let n3 =0;
    let n5 =0;
    for (let i = 0; i <= limite; i++) {
        if (i % 3 === 0) {
            n3 += i;
        }
        if (i % 5 === 0) {
           n5 += i;
        }
    }
    return n3 + n5;
}
console.log(somar(10));
