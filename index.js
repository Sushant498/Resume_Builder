// alert("loading please wait")
function addNewWEField() {
    // console.log("adding new field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewCField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("cField");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");

    let cOb = document.getElementById("c");
    let cAddButtonOb = document.getElementById("cAddButton");

    cOb.insertBefore(newNode, cAddButtonOb);
}

//genrating cv
function generateCV() {
    // console.log("generatingCV")

    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;

    //direct

    document.getElementById("nameT2").innerHTML = nameField;

    //contact
    document.getElementById("contactT").innerHTML = document.getElementById(
        "contactField"
    ).value;

    //address
    document.getElementById("addressT").innerHTML = document.getElementById(
        "addressField"
    ).value;
    document.getElementById("fbT").innerHTML = document.getElementById(
        "fbField"
    ).value;
    document.getElementById("instaT").innerHTML = document.getElementById(
        "instaField"
    ).value;
    document.getElementById("LinkedT").innerHTML = document.getElementById(
        "LinkedField"
    ).value;

    //set objective

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    //work experience

    let wes = document.getElementsByClassName("weField")

    let str = "";

    for (let e of wes) {
        str = str + `<li> ${e.value}</li>`;
    }

    document.getElementById("weT").innerHTML = str;

    //certificate
    let cs = document.getElementsByClassName("cField")

    let str2 = "";

    for (let e of cs) {
        str2 = str2 + `<li> ${e.value}</li>`;
    }

    document.getElementById("certificateT").innerHTML = str2;

    //acadmicqualification

    let aqs = document.getElementsByClassName("aqField")

    let str1 = "";

    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value}</li>`;
    }

    document.getElementById("aqT").innerHTML = str1;



    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-tamplate").style.display = "block";
}

//print button

function printCV() {
    window.print();

}