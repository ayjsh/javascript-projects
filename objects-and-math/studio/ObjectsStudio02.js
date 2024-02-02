// Code your orbitCircumference function here:
function orbitCircumference(radInKm) {
  return Math.round(2 * Math.PI * radInKm);
}

// Code your missionDuration function here:
function missionDuration (orbsCompleted, orbRadius, orbSpeed) {
  return Math.round((orbsCompleted * orbitCircumference(orbRadius)/orbSpeed)*100)/100;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

// Code your oxygenExpended function here:
function oxygenExpended(crewMember){
  crewMember = selectRandomEntry(crew);
  let hours = missionDuration(3, orbRadius, orbSpeed);
  let o2 = Math.round(crewMember.o2Used(hours)*1000)/1000;
  return (`${crewMember} will perform the spacewalk, which will last ${hours} hours and require ${o2} kg of oxygen.`)
}


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 let defaultOrbRadius = 2000;
 let defaultOrbSpeed = 28000;

 oxygenExpended(crew);
 console.log(`The mission will travel ${orbitCircumference(defaultOrbRadius)} km around the planet, and it will take ${missionDuration(10, defaultOrbRadius, defaultOrbSpeed)} hours to complete.`)
 