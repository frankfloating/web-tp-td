function delcontent() {
    document.getElementById("res").value = "";
}

function evalcontent() {
    let val = document.getElementById("res").value;
    document.getElementById("res").value = eval(val);
}

function buttontxt(o) {
    let ftxt = document.getElementById("res").value;
    document.getElementById("res").value = ftxt + o.firstChild.nodeValue;
}

function allbutt() {
    let tab = document.getElementsByClassName("button");
    for (let i = 0; i < tab.length; i++) {
        tab[i].onclick = function () {
            buttontxt(tab[i])
        };
    }
    document.getElementById("C").onclick = function () {delcontent()};
    document.getElementById("egal").onclick = function () {evalcontent()};
}