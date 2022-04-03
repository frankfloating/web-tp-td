function computeSyracuse(init, k) {
    let u = init;
    for (let i =1; i <= k; i++){
        if (u % 2 == 0){
            u = u / 2;
        }
        else{
            u = 3 * u + 1;
        }
    }
    return u;
}

console.log(computeSyracuse(10, 3));

function computeSyracuseFlight(init) {
    let u = init;
    let cpt = 0;
    while (u > 1){
        if (u % 2 == 0){
            u = u / 2;
        }
        else{
            u = 3 * u + 1;
        }
        cpt = cpt + 1;
    }
    return cpt;
}

console.log(computeSyracuseFlight(10));

function getNumberOfDigits(a) {
    let num = a;
    let count = 0;
    while (num >= 10){
        num = num / 10;
        count = count + 1
    }
    return count;
}

console.log(getNumberOfDigits(100));

function integerSum(a, b) {
    let nummin = a;
    for (let count = a; count <=b; count++){
        nummin = nummin + count;
    }
    return nummin;
}

console.log(integerSum(2, 5));

function fst(n) {
    let tot;
    for (let i = 1; i <= n; i++){
        tot = tot + (1 / i);
    }
    return tot;
}

console.log(fst(4));
console.log(fst(40));
console.log(fst(400));
console.log(fst(4000));
console.log(fst(40000));

function scd(n) {
    let tot;
    for (let i = n; i > 0; i--){
        tot = tot + (1 / i)
    }
    return tot;
}

console.log(scd(4));
console.log(scd(40));
console.log(scd(400));
console.log(scd(4000));
console.log(scd(40000));