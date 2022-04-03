let unentier = 3;
console.log(unentier);

console.log(typeof unentier);

let a;
console.log(a);
/*val a inconnue*/
/*undefined*/

a = 45;
console.log(a);

let b = 24;
console.log(b);

a = b;
b = 45;
console.log(a,b);

let c = a + b;
console.log(c);

c = a - b;
console.log(c);

let s1 = "Bonjour";
console.log(s1);
/*string*/

let s2 = "frank";
console.log(s2);

let s3 = s1 + s2;
console.log(s3);

let s4 = s1 - s2;
console.log(s4);
/*not a number*/

let car1 = 'a';
console.log(car1);

let d0 = new Date(1955, 5 ,8);
console.log(d0.toString());
/*les mois commencent par 0*/
/*année, mois et jour*/

let d1 = new Date(1997, 1, 12);
console.log(d1.toString());

let d2 = new Date(2022, 2, 8);
console.log(d2.toString());

d1 + d2;
console.log(d1,d2);

d1 + 2;
console.log(d1);
/*ne change pas car pas de même type*/











