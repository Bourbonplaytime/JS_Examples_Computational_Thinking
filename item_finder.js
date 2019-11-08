let validItems = [106, 108, 307, 405, 457, 688];
let prices = [12, 15, 18, 21, 24, 27];
let amountDue = 0;
itemInCart = [];

let itemNum = prompt("Enter item number you would like to order or 'quit' to end.");

while(itemNum != "quit") {
    let foundIt = false;
    for(i = 0; i < validItems.length && foundIt != true; i++) {
        if(itemNum == validItems[i]) {
            alert("Item available!");
            foundIt = true;
            itemInCart.push(itemNum);
            amountDue += prices[i];
        }
    }
    if(foundIt == false) {
        alert("Item not found");
    }
    itemNum = prompt("Enter item number you would like to order or 'quit' to end.");
}

console.log(itemInCart);
console.log("The total cost of this order is $" + amountDue);