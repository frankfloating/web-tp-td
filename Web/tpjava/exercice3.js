function isGreatterthan2(a){
    return (a > 2);
}

console.log(isGreatterthan2(3));
console.log(isGreatterthan2(1));
console.log(isGreatterthan2(2.5));

function isBeginningWithUpperCase(valeur) {
    return (valeur >= 'A') && (valeur <= 'Z');
}

console.log(isBeginningWithUpperCase('E'));
console.log(isBeginningWithUpperCase('a'));
console.log(isBeginningWithUpperCase(3));

/*true*/
console.log(isBeginningWithUpperCase("Bonjour"));

function isUppercase(lettre) {
    return (typeof lettre == "string")
    && (lettre.length == 1)
    && (lettre >= 'A')
    && (lettre <= 'Z');
}

console.log(isUppercase('ER'));
console.log(isUppercase('F'));
console.log(isUppercase("D"));

function isBetween(a,min,max) {
    return (min <= a)
        && (a <= max);
}


console.log(isBetween(5,1,4));
console.log(isBetween(3,1,4));
console.log(isBetween('e','a','z'));
console.log(isBetween('E','a','z'));
console.log(isBetween('.', 'A', 'z'));
console.log(isBetween('[', 'A', 'z'));
console.log(isBetween('g', 'A', 'z'));
console.log(isBetween('e', 'a', 'Z'));
console.log(isBetween('chien', 'chat', 'souris'));
console.log(isBetween('chat', 'chien', 'souris'));

function isLetter(a) {
    return (isBetween(a, 'a', 'z'))
    || (isBetween(a, 'A', 'Z'));
}

console.log(isLetter('a'));
console.log(isLetter('ab'));

function isDigit(a) {
    return (isBetween(a, 0, 9));
}

console.log(isDigit(3));
console.log(isDigit(45));
console.log(isDigit("3"));
console.log(isDigit("34"));


function isAlphaNumeric(a) {
    return (isLetter(a))
    || (isDigit(a));
}

console.log(isAlphaNumeric(5));

function isLeapyear(year) {
    a = year % 400;
    b = year % 4;
    c = year % 100;
    return (a == 0)
    || ((b == 0) && !(c == 0))
}

console.log(isLeapyear(2000));
console.log(isLeapyear(2002));

function belongsToRectangle(x, y, a1, b1, a2, b2) {
    return ((x == a1)
    && (y == b1))
    || ((x == a2)
    &&  (y == b2));
}

console.log(belongsToRectangle(1,4, 1, 4, 7, 9));
console.log(belongsToRectangle(1, 4, 8, 5, 1, 4));
console.log(belongsToRectangle(1, 4, 1, 4, 1, 4));


