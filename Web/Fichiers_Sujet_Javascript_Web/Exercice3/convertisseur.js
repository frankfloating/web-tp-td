function convertftoc(){
    let fval = document.getElementById("i1").value;
    document.getElementById("i2").value = (fval - 32) * (5 / 9);
}

function convertctof() {
    let cval = document.getElementById("i2").value;
    document.getElementById("i1").value = (cval * (9 / 5)) + 32;
}

function con() {
    (document.getElementById("i1")).onblur = function () {convertftoc()};
    (document.getElementById("i1")).onfocus = function() {document.getElementById("i1").value = 0};
    (document.getElementById("i2")).onblur = function() {convertctof()};
    (document.getElementById("i2")).onfocus = function() {document.getElementById("i2").value = 0};
}