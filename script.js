let enxertos = ["Tomate bs 045", "Tomate bs 113", "Tomate bs 114", "Tomate bs 115", "Tomate baby italiano", "Tomate ravena", "Tomate picolo","Sweet haven", "Tomate brutus", "Tomate td1", "Tomate da vinci", "Tomate santino", "Tomate cariri", "Tomate tempra"];
let legume1 = ["Tomate bs 045", "Tomate bs 113", "Tomate bs 114", "Tomate bs 115", "Tomate baby italiano", "Tomate ravena", "Tomate picolo","Sweet haven", "Tomate brutus", "Tomate td1", "Tomate da vinci", "Tomate santino", "Tomate cariri", "Tomate tempra"];
let legume2 = ["Tomate bs 045", "Tomate bs 113", "Tomate bs 114", "Tomate bs 115", "Tomate baby italiano", "Tomate ravena", "Tomate picolo","Sweet haven", "Tomate brutus", "Tomate td1", "Tomate da vinci", "Tomate santino", "Tomate cariri", "Tomate tempra"];

let cima = document.getElementById("cima");
let baixo = document.getElementById("baixo");

enxertos.forEach(function addEnxertos(item){
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    cima.appendChild(option);
});

cima.onchange = function (){
    baixo.innerHTML = "<option></option>";
    if (this.value == "Tomate bs 045", "Tomate bs 113", "Tomate bs 114", "Tomate bs 115", "Tomate baby italiano", "Tomate ravena", "Tomate picolo","Sweet haven", "Tomate brutus", "Tomate td1", "Tomate da vinci", "Tomate santino", "Tomate cariri", "Tomate tempra") {
        addToBaixo(legume1);
    }

}

function addToBaixo(arr) {
    arr.forEach(function (item){
        let option = document.createElement("option");
        option.text = item;
        option.value = item;
        baixo.appendChild(option);
    });
}

let species = ["Alface", "Tomate"];
let alface = ["Alface Vanda", "Alface Jade", "Alface Grazine","Alface Irene","Alface Lucy Brow", "Alface Brow", "Alface Scarlet", "Alface Regiane", "Alface Angelica"];
let tomate = ["Tomate bs 045", "Tomate bs 113", "Tomate bs 114", "Tomate bs 115", "Tomate baby italiano", "Tomate ravena", "Tomate picolo","Sweet haven", "Tomate brutus", "Tomate td1", "Tomate da vinci", "Tomate santino", "Tomate cariri", "Tomate tempra"];

let slct1 = document.getElementById("slct1");
let slct2 = document.getElementById("slct2");

species.forEach(function addSpecies(item){
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct1.appendChild(option);
});

slct1.onchange = function (){
    slct2.innerHTML = "<option></option>";
    if (this.value == "Alface") {
        addToSlct2(alface);
    }
    if (this.value == "Tomate") {
        addToSlct2(tomate);
    }
}

function addToSlct2(arr) {
    arr.forEach(function (item){
        let option = document.createElement("option");
        option.text = item;
        option.value = item;
        slct2.appendChild(option);
    });
}