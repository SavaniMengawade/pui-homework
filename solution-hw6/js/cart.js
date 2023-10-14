let cart = [];
//cart array

let packChoiceP = {
    1: 1,
    3: 3,
    6: 5,
    12: 10,
};

//four roll objects
// let originalRoll = new Roll("Original", "Sugar Milk", 1, 2.49);
// let walnutRoll = new Roll("Walnut", "Vanilla Milk", 12, 3.99);
// let raisinRoll = new Roll("Raisin", "Sugar Milk", 3, 2.99);
// let appleRoll = new Roll("Apple", "Keep Original", 3, 3.49);

// cart.push(originalRoll);
// cart.push(walnutRoll);
// cart.push(raisinRoll);
// cart.push(appleRoll);

// window.addEventListener('load', addItemsToCart);

//referenced: https://stackoverflow.com/questions/58730444/why-load-event-not-working-on-addeventlistener


let selectCartImg = document.querySelector('.cartImg');
let rollSelect;
let i;
const priceCart = document.querySelector('.totalTwo');
let totalCartPrice = 0;

retrieveFromLocalStorage(); 

for(let rollSelect of cart)
{
    // rollSelect = cartAdd[i];
    addItemsToCart(rollSelect);
}

function addItemsToCart(rollSelect){

        const template = document.getElementById('cartCardTemplate');
        const clone = template.content.cloneNode(true);
        rollSelect.element = clone.querySelector('.cartCard');

        let removeButton = rollSelect.element.querySelector('#remove');
        removeButton.addEventListener('click', () => {
            removeElement(rollSelect);
          });

        const cartElement = document.querySelector('.cart');
        cartElement.appendChild(rollSelect.element);
        updateElement(rollSelect);
        priceCart.innerText = "$ " + totalCartPrice.toFixed(2);
        
}



function removeElement(rollSelect){
    console.log("Index : " + cart.indexOf(rollSelect));

    //edge case
    if(cart.length !=0){
        rollSelect.element.remove();
    
        cart.splice(cart.indexOf(rollSelect),1);
        // console.log(updatedPrice(cartAdd));
        priceCart.innerText = "$ " + updatedPrice(cart).toFixed(2);
        console.log(cart);
        saveToLocalStorage();
    }
    
    
}

function updateElement(rollSelect){
    const imageCart = rollSelect.element.querySelector('.productCart');
    const titleCart = rollSelect.element.querySelector('#cartContent');
    const glazingCart = rollSelect.element.querySelector('#cartGlaze');
    const packCart = rollSelect.element.querySelector('#cartPack');
    const priceCart = rollSelect.element.querySelector('.price');
  
    // src = "../assets/products/original-cinnamon-roll.jpg"

    imageCart.src = '../assets/products/' + rolls[rollSelect.type]['imageFile'];
    titleCart.innerText = rollSelect.type + " Cinnamon Roll";
    glazingCart.innerText = rollSelect.glazing;
    packCart.innerText = "Pack Size: " + rollSelect.size;
    
    let l = parseFloat(calcPriceItem(rollSelect));
    priceCart.innerText = "$ " + l;
    totalCartPrice = totalCartPrice + l; 
}


let updatedDisplayPrice =0;
let t;

function updatedPrice(cart){
    updatedDisplayPrice =0;
    for(let selectRollItem of cart){
        console.log(selectRollItem);
        let a = selectRollItem.size;
        t = (selectRollItem.basePrice*packChoiceP[a]);
        updatedDisplayPrice = updatedDisplayPrice + t;
        console.log("this"+updatedDisplayPrice);
    }
    console.log(updatedDisplayPrice.toFixed(2));
    return updatedDisplayPrice;
}


function calcPriceItem(rollSelect) {
    let temp = rollSelect.size;
    let p = (packChoiceP[temp] * rollSelect.basePrice).toFixed(2);
    return p;
}

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




