let validItems = [106, 108, 307, 405, 457, 688];
itemInCart = [];

let itemNum = prompt("Enter item number you would like to order or 'quit' to end.");

while(itemNum != "quit") {
    let foundIt = false;
    for(i = 0; i < validItems.length; i++) {
        if(itemNum == validItems[i]) {
            alert("Item available!");
            foundIt = true;
            itemInCart.push(itemNum);
        }
    }
    if(foundIt == false) {
        alert("Item not found");
    }
    itemNum = prompt("Enter item number you would like to order or 'quit' to end.");
}

console.log(itemInCart);