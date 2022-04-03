function windalert() {
    window.alert("Bonjour!");
}

function windalert2() {
    window.alert("Bonjour!" + document.getElementById("q2").value);
}

function windalert3() {
    let obj = document.getElementById("age").value;
    if (obj < 18) {
        window.alert("ne peut voter");
    }
    if (obj >= 18) {
        window.alert("peut voter");
    }
    else {
        window.alert("error : not a number");
    }
}

function windprompt() {
    let b = true;
    while (b === true) {
        let a = window.prompt("give a number");
        if ((a >= 0) && (a <= 20)) {
            b = false;
        }
        document.getElementById("note").value = a;
    }
}

function changecol() {
    let t = document.getElementsByTagName("h1");
    for (let i = 0; i < t.length; i++) {
        t[i].style.color = "blue";
    }
}

function tab1() {
    let dt = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];
    let num = document.getElementById("numcase").value;
    if ((num >= 0) && (num <= 4)) {
        document.getElementById("contenucase").value = dt[num];
    }
    else {
        window.alert("error : invalid number");
    }
}

function tab2() {
    let date = document.getElementById("contenucase").value;
    let num;
    switch (date) {
        case "lundi" : num = 0; break;
        case "mardi" : num = 1; break;
        case "mercredi" : num = 2; break;
        case "jeudi" : num = 3; break;
        case "vendredi" : num = 4; break;
        default : window.alert("error : invalid date"); break;
    }
    document.getElementById("numcase").value = num;
}

function imgchange() {
   let o = document.getElementById("img").getAttribute("src");
   let newo;
   switch (o) {
       case "Pique.png" : newo = "Coeur.png"; break;
       case "Coeur.png" : newo = "Carreau.png"; break;
       case "Carreau.png" : newo = "Trefle.png"; break;
       case "Trefle.png" : newo = "Pique.png"; break;
   }
   document.getElementById("img").setAttribute("src", newo);
}
