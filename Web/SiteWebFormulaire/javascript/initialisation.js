

function mysubmit() {
    let tbeg = new Date(document.getElementById("in3").value);
    let tend = initHiddenInput();
    let time = tend.getTime() - tbeg.getTime();
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor(time / 60000);
    let seconds = Math.floor(time / 1000);
    if (seconds > 60) {
        let m = Math.floor(seconds / 60);
        let s = Math.floor(seconds % 60);
        minutes = minutes + m;
        seconds = s;
    }
    if (minutes > 60) {
        let h = Math.floor(minutes / 60);
        let n = Math.floor(minutes % 60);
        hours = hours + h;
        minutes = n;
    }
    document.getElementById("in4").value = hours + ":" + minutes + ":" + seconds;
    document.forms[0].submit();
    window.alert(
        "merci "
        + document.getElementById("in2").value
        +" "
        + document.getElementById("in1").value
        + " d'avoir participer."
    );
}

function initReadOnlyTextInput() {
    let date_begin = new Date();
    document.getElementById("in3").value = date_begin;
}

function initHiddenInput() {
    let date_end = new Date();
    document.getElementById("in4").value = date_end;
    return date_end;
}