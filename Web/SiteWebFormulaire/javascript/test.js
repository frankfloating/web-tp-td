function applyAllTests() {
    checkNames();
    checkNumberCheckedRadio();
    checkCheckbox();
}

function checkNames() {
    let surname = document.getElementById("in1").value;
    let name = document.getElementById("in2").value;
    if (surname === "votre nom") {
        document.getElementById("in1").value = "Votre nom, svp!!";
        document.getElementById("in1").style.color = "red";
        document.getElementById("in1").style.fontSize = "12pt";
    }
    if (name === "votre prénom") {
        document.getElementById("in2").value = "Votre prénom, svp!!";
        document.getElementById("in2").style.color = "red";
        document.getElementById("in2").style.fontSize = "12pt";
    }
    if (surname === "Votre nom, svp!!") {
       window.alert("nom manquant!")
    }
    if (name === "Votre prénom, svp!!") {
       window.alert("prénom manquant!")
    }
}

function checkNumberCheckedRadio() {
    let check = document.getElementsByTagName("input");
    let num = 0;
    for (let i = 0; i < (check).length; i++) {
        if (check[i].type === "radio"){
            if (!(check[i].checked)) {
                num = num + 1;
            }
        }
    }
    if (num > 18) {
        window.alert("boutons qui restent à cocher : " + (num - 18).toString())
    }
}

function checkCheckbox() {
    let check = document.getElementsByTagName("input");
    let numc1 = 0;
    let numc2 = 0;
    let numc3 = 0;
    for (let i = 0; i < check.length; i++) {
        if (check[i].type === "checkbox") {
            if (check[i].checked) {
                switch (check[i].name) {
                    case "c1" : numc1 = numc1 + 1; break;
                    case "c2" : numc2 = numc2 + 1; break;
                    case "c3" : numc3 = numc3 + 1; break;
                }
            }
        }
    }
    if (numc1 === 0) {
        document.getElementById("li1").style.color = "red";
    }
    if (numc2 === 0) {
        document.getElementById("li2").style.color = "red";
    }
    if (numc3 === 0) {
        document.getElementById("li3").style.color = "red";
    }
}
