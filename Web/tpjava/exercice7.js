let minmax = {min : 0, max : 10};
console.log(minmax["min"]);
console.log(minmax["max"]);
console.log(minmax.min);
console.log(minmax.max);

let HermioneGrangerResults = {
    defenceAgainstDarkArts: 19,
    potions: 20,
    charms: 20,
    careOfMagicalCreatures: 19
};

function computeAverage(results) {
    let s = 0;
    let nbSubjects = 0;
    for (let subject in results){
        s = s + results[subject];
        nbSubjects = nbSubjects + 1;
    }
    s = s / nbSubjects;
    return s;
}

console.log(computeAverage(HermioneGrangerResults));

function getObjectProperties(o) {
    chaine = "";
    for (let pro in o){
        chaine = chaine + "\n";
        chaine = chaine + pro;
        chaine = chaine + " : ";
        chaine = chaine + o[pro].toString();
    }
    return chaine;
}

console.log(getObjectProperties(minmax));
console.log(getObjectProperties(HermioneGrangerResults));
