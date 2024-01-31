let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 7,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 10,
   move: function () {return Math.floor(Math.random()*11)}
};

let beag = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let tardi = {
   name: "Almina",
   species: "Tardigrade",
   mass: "0.0000000001",
   age: "1",
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let astroAnimals = [superChimpOne, salamander, superChimpTwo, beag, tardi];

function crewReports (animal){
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.age} kilograms. Their ID is ${animal.astronautID}.`);
}

function fitnessTest(arr){
   let results = [], numSteps, turns;
   for (let i = 0; i < arr.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += arr[i].move();
       turns++;
       }
       results.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }

crewReports(superChimpOne);

console.log(fitnessTest(astroAnimals));

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!