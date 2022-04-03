function initTable() {
    let fst = document.getElementById("i1").value ;
    let scd = document.getElementById("i2").value ;
    if ((fst <= 0) || (scd <= 0)) {
        window.alert("nombre négative") ;
    }
    else {
        buildTable(fst, scd) ;
        fillTable() ;
    }
}

function translateColor(str) {
    let col ;
    switch (str) {
        case "rouge" : col = "red"; break ;
        case "bleu" : col = "blue"; break ;
        case "marron" : col = "brown"; break ;
        case "vert" : col = "green"; break ;
        case "jaune" : col = "yellow"; break ;
        case "blanc" : col = "white"; break ;
        default : col = "black" ;
    }
    return col ;
}

function colorTable() {
    let strt = translateColor(document.getElementById("i3").value) ;
    let strb = translateColor(document.getElementById("i4").value) ;
    for (let i = 1; i <= getNumberOfLines(); i++) {
        for (let a = 1; a <= getNumberOfColumns(); a++) {
            getElement(i, a).style.color = strt ;
            getElement(i, a).style.backgroundColor = strb ;
        }
    }
}