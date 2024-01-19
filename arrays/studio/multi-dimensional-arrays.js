let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinetOne = food.split(',').sort();
let cabinetTwo = equipment.split(',').sort();
let cabinetThree = pets.split(',').sort();
let cabinetFour = sleepAids.split(',').sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinetOne, cabinetTwo, cabinetThree, cabinetFour];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let input = require('readline-sync');
let cabinetNumber=input.question("Please Enter Cabinet Number : ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if ((cabinetNumber <= cargoHold.length) && (cabinetNumber >= 0)) {
    console.log(`Cabinet ${cabinetNumber} contains ${cargoHold[cabinetNumber - 1]}`);
} else {
    console.log("The selected cabinet does not exist!");
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
 
let cabinetNumber1 = input.question("Please Enter Cabinet Number: ");
let itemName = input.question("Please Enter Item Name: ");
let count; 
    if (cargoHold[cabinetNumber1-1].includes(itemName)) {
       console.log(`Cabinet ${cabinetNumber1} contains ${itemName}.`);
    } else {
        console.log(`Cabinet ${cabinetNumber1} does not contain ${itemName}.`);
    }
