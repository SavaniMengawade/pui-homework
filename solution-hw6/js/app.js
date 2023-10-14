


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

//extracting roll name
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');


// console.log(rollType);

const rollTitleElement = document.getElementById('rollTitle');
rollTitleElement.innerText = rollType + " Cinnamon Roll";

// console.log(rolls[rollType].imageFile);

const rollImage = document.getElementById('rollProductImage');
rollImage.src = '../assets/products/' + rolls[rollType].imageFile;

let cart = [];   //empty array


let displayPrice = document.getElementById('currentCartPrice');
displayPrice.innerText = rolls[rollType].basePrice;



// calculating final price
function calcPrice(gp,pp){
    currentPrice = rolls[rollType].basePrice;
    currentPrice = ((currentPrice+gp)*pp).toFixed(2);
    document.getElementById('currentCartPrice').innerHTML = currentPrice;
}


let addCart = document.getElementById('addCartButton');
addCart.addEventListener('click', addToCartArray);

function addToCartArray(){
    let finalGlaze = selectGlazing.options[selectGlazing.selectedIndex].text;
    let finalSize = selectPackSize.options[selectPackSize.selectedIndex].text;
    let rollProduct = new Roll(rollType, finalGlaze, finalSize, rolls[rollType].basePrice);
    cart.push(rollProduct);
    console.log(cart);
    saveToLocalStorage();
}


//Reference to select the selected roll : https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript


function saveToLocalStorage(){
    const cartArrayString = JSON.stringify(cart);
    console.log(cartArrayString);
    localStorage.setItem('storedCart', cartArrayString);
}

function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedCart');
    console.log("Cas" + cartArrayString);
    const cartArray = JSON.parse(cartArrayString);
    for (const rollData of cartArray) {
        cart.push(rollData);
    }
  }
  
  if (localStorage.getItem('storedCart') != null) {
    retrieveFromLocalStorage();
  }
















