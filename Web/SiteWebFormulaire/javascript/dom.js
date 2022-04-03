function displayAnswers() {
    let surname = document.getElementById("in1").value;
    let name = document.getElementById("in2").value;
    let n1 = document.createElement("h2");
    let n2 = document.createTextNode(name + " " + surname);
    let n3 = n1.appendChild(n2);
    document.body.appendChild(n3);
    let trindoc = document.getElementsByTagName("tr");
    for (let i = 1; i < trindoc.length; i++) {
        let tr = document.createElement("tr");
        let td = trindoc[i].children;
        let td0 = document.createTextNode(td[0].children[0].firstChild.nodeValue + " | ");
        let tdb0 = document.createElement("td").appendChild(td0);
        tr.appendChild(tdb0);
        if (td[1].children[0].checked) {
            let td1 = document.createTextNode("Inline");
            let tdb1 = document.createElement("td").appendChild(td1);
            tr.appendChild(tdb1);
        }
        if (td[2].children[0].checked) {
            let td2 = document.createTextNode("block");
            let tdb2 = document.createElement("td").appendChild(td2);
            tr.appendChild(tdb2);
        }
        if (!(td[1].children[0].checked) && !(td[2].children[0].checked)) {
            let td3 = document.createTextNode("non renseigné");
            let tdb3 = document.createElement("td").appendChild(td3);
            tr.appendChild(tdb3);
        }
        document.body.appendChild(tr);
    }
}