let menuItems = [
 { id: 1, name: "Cola", price: 30 },
{ id: 2, name: "Chips", price: 20 },
    { id: 3, name: "Chocolate Bar", price: 40 },
  { id: 4, name: "Water Bottle", price: 15 },
 { id: 5, name: "Cookies", price: 25 }
];

function displayMenu() {
 console.log("--- VENDING MACHINE MENU ---");
for(let i = 0; i < menuItems.length; i++) {
       console.log(menuItems[i].id + ". " + menuItems[i].name + " - Rs." + menuItems[i].price);
 }
}

function processPayment(itemPrice, userMoney, itemName) {
    if(userMoney < itemPrice) {
  alert("Insufficient balance! You need Rs." + (itemPrice - userMoney) + " more.");
 return false;
      } else if(userMoney === itemPrice) {
   alert("You selected " + itemName + ". Exact amount given. No change returned.");
  return true;
 } else {
       let change = userMoney - itemPrice;
 alert("You selected " + itemName + ". Change returned: Rs." + change);
    return true;
     }
}

function runCountdown() {
    for(let i = 3; i >= 1; i--) {
 console.log("Dispensing in... " + i);
     }
console.log("Your item is ready!");
}

function showPattern(itemNumber) {
 console.log("Printing pattern for item " + itemNumber + ":");
  for(let i = 1; i <= itemNumber; i++) {
        let patternRow = "";
   for(let j = 1; j <= i; j++) {
   patternRow += j + " ";
  }
       console.log(patternRow);
 }
}

function startVendingMachine() {
   let keepBuying = true;

 while(keepBuying) {
displayMenu();
     let choice = prompt("Enter the item number (1-5) you want to buy:");
 choice = parseInt(choice);

  if(isNaN(choice) || choice < 1 || choice > 5) {
      alert("Invalid item number! Please enter a number between 1 and 5.");
 } else {
      let amount = prompt("Enter the amount of money you have:");
  amount = parseFloat(amount);

 if(isNaN(amount) || amount < 0) {
  alert("Invalid amount! Please enter a valid positive number.");
     } else {
 let selectedItem = menuItems[choice - 1];
   let isPurchaseSuccess = processPayment(selectedItem.price, amount, selectedItem.name);

      if(isPurchaseSuccess) {
runCountdown();
    showPattern(choice);
   }
  }
       }

      let buyAgain = confirm("Do you want to make another purchase?");
 if(buyAgain === true) {
   console.log("Loading menu again...");
     } else {
 keepBuying = false;
    alert("Thank you for using the Smart Vending Machine. Goodbye!");
 console.log("Machine turned off.");
    }
  }
}

startVendingMachine();