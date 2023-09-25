let glazingChoice = {
    "keepOriginal": {name:"Keep Original", value:0},
    "sugarMilk": {name:"Sugar Milk", value:0},
    "vanillaMilk": {name:"Vanilla Milk", value:0.5},
    "doubleChocolate": {name:"Double Chocolate", value:1.5},
};

let packChoice = {
    "one": {size:"1", value:1},
    "three": {size:"3", value:3},
    "six": {size:"6", value:5},
    "twelve": {size:"12", value:10},
};

let selectGlazing = document.getElementById('selectGlazing');
selectGlazing.addEventListener('change', calcGlazingPrice);

let selectPackSize = document.getElementById('selectPackSize');
selectPackSize.addEventListener('change', calcPackSize);

//setting intial default values
let currentPrice = 2.49; 
let glazingPrice = 0;
let packPrice = 1;



//populating options with glazing and pack choices
for (let i in glazingChoice)
{
    let option = document.createElement("option");
    option.textContent = glazingChoice[i].name;
    option.value = glazingChoice[i].value;
    selectGlazing.appendChild(option);
}

for (let j in packChoice)
{
    let optionPC = document.createElement("option");
    optionPC.textContent = packChoice[j].size;
    optionPC.value = packChoice[j].value;
    selectPackSize.appendChild(optionPC);
}


//selecting current glazing and pack 
function calcGlazingPrice() {
    let selectedGlaze = parseFloat(this.value);
    glazingPrice = selectedGlaze;
    calcPrice(glazingPrice,packPrice);
}

function calcPackSize() {
    let selectedPack = parseFloat(this.value);
    packPrice = selectedPack;
    calcPrice(glazingPrice,packPrice);

}


// calculating final price
function calcPrice(gp,pp){
    currentPrice = 2.49;
    currentPrice = ((currentPrice+gp)*pp).toFixed(2);
    document.getElementById('currentCartPrice').innerHTML = currentPrice;
}









