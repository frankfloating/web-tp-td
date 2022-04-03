function computeDiscount(price){
    let newPrice;
    if (typeof price != "number"){
        return -1;
    }
    if (price >= 1000){
        newPrice = price * 0.6;
    }
    else if (price >= 500){
        newPrice = price * 0.8;
    }
    else if (price >= 100){
        newPrice = price * 0.9;
    }
    else{
        newPrice = price;
    }
    return newPrice;
}

console.log(computeDiscount(500));
console.log(computeDiscount(50));
console.log(computeDiscount("salut"));
console.log(computeDiscount('e'));

function getMaximum(a, b, c) {
    let max;
    if (a >= b){
        max = a;
    }
    if (a >= c){
        max = a;
    }
    else if (b >= c){
        max = b;
    }
    else {
        max = c;
    }
    return max;
}

console.log(getMaximum(5, 40, 48));
console.log(getMaximum(7, 1, 5));
console.log(getMaximum(1,8, 4));

function nextSecond(h, m, s){
    let nexth, nextm, nexts;
    if ((s !== 59) && (m !== 59)){
        nexts = s + 1;
        nextm = m;
        nexth = h;
    }
    else if ((s == 59) && (m == 59)){
        nexts = "0";
        nextm = "0";
        nexth = h + 1;
    }
    else {
        nexts = 0;
        nextm = m + 1;
        nexth = h;
    }
    let time = (nexth.toString() + ":" + nextm.toString() + ":" + nexts.toString())
    return(time);
}

console.log(nextSecond(14, 23, 4));
console.log(nextSecond(14, 23, 59));
console.log(nextSecond(23, 59, 59));

function giveDirection(d){
    let direction;
    switch (d) {
        case 'n' :
        case 'N' : direction = "NORTH"; break;
        case 'e' :
        case 'E' : direction = "EAST"; break;
        case 's' :
        case 'S' : direction = "SOUTH"; break;
        case 'w' :
        case 'W' : direction = "WEST"; break;
        default : direction = "ERROR";
    }
    return direction;
}

console.log(giveDirection('3'));
console.log(giveDirection('n'));
console.log(giveDirection('E'));

function getMonthName(m) {
    let month;
    switch (m) {
        case 1 : month = "january"; break;
        case 2 : month = "february"; break;
        case 3 : month = "march"; break;
        case 4 : month = "april"; break;
        case 5 : month = "may"; break;
        case 6 : month = "june"; break;
        case 7 : month = "july"; break;
        case 8 : month = "august"; break;
        case 9 : month = "september"; break;
        case 10 : month = "october"; break;
        case 11 : month = "november"; break;
        case 12 : month = "december"; break;
        default : month = "";
    }
    return month;
}

console.log(getMonthName(3));
console.log(getMonthName(0));

function getNumberOfDays(m, b) {
    let days;
    if (b) {
        switch (m) {
            case 1 : days = 31; break;
            case 2 : days = 29; break;
            case 3 : days = 31; break;
            case 4 : days = 30; break;
            case 5 : days = 31; break;
            case 6 : days = 30; break;
            case 7 : days = 31; break;
            case 8 : days = 31; break;
            case 9 : days = 30; break;
            case 10 : days = 31; break;
            case 11 : days = 30; break;
            case 12 : days = 31; break;
            default : days = -1;
        }
    }
    else{
        switch (m) {
            case 1 : days = 31; break;
            case 2 : days = 28; break;
            case 3 : days = 31; break;
            case 4 : days = 30; break;
            case 5 : days = 31; break;
            case 6 : days = 30; break;
            case 7 : days = 31; break;
            case 8 : days = 31; break;
            case 9 : days = 30; break;
            case 10 : days = 31; break;
            case 11 : days = 30; break;
            case 12 : days = 31; break;
            default : days = -1;
        }
    }
    return days;
}

console.log(getNumberOfDays(2, true));
console.log(getNumberOfDays(2, false));
console.log(getNumberOfDays(-1, true));

function stampCosts(quantite, code) {
    let price;
    switch (code) {
        case 0 : price = (0.68 * quantite); break;
        case 1 : price = (0.70 * quantite); break;
        case 2 : price = (0.80 * quantite); break;
        default : price = 0;
        }
        return price;
}

console.log(stampCosts(2, 2));
console.log(stampCosts(1, 0));
console.log(stampCosts(1, 4));
console.log(stampCosts(0, 0));