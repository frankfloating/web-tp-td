let tab = [10, 20, 30, 40];
console.log(tab);

tab[0] = 100;
console.log(tab);

tab[1] = 200;
tab[2] = "bonjour";
console.log(tab);

console.log(tab.join());

console.log(tab[4]);

tab[4] = 500;
console.log(tab.join());

tab[200] =20000;
console.log(tab.join());
/* [,,,,,,]*/

function computeMax(t) {
    let max = t[0];
    for (let i = 1; i < t.length; i++){
        if (t[i] > max){
            max = t[i];
        }
    }
    return max;
}

console.log(computeMax([1, 2, 3]));
console.log(computeMax(["a", "b", "c"]));
console.log(computeMax([1, "b", 3]));

function turnLeft(tab) {
    let nt = [];
    for (let i = 0; i < tab.length - 1; i++){
            nt[i] = tab[i + 1];
    }
    nt[tab.length - 1] = tab[0];
    return nt;
}

console.log(turnLeft([1, 2 ,3, 4, 5]));

function turnRight(tab){
    let nt = [];
    for (let i = tab.length - 1; i > 0; i--){
        nt [i] = tab[i - 1];
    }
    nt[0] = tab[tab.length - 1];
    return nt;
}

console.log(turnRight([1, 2, 3, 4, 5]));

function permute(tab, k) {
    if (k == 0){
        return tab
    }
    else if (k > 0) {
        k = k - 1;
        return permute(turnLeft(tab), k);
    }
    else {
        k = k + 1;
        return permute(turnRight(tab), k);
    }
}

console.log(permute([1, 2, 3, 4, 5], 3));
console.log(permute([1, 2, 3, 4 ,5], -3));


