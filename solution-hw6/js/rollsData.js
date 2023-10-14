const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

//dictionary for populating choices
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

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}