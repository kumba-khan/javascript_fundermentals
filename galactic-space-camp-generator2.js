// 1. Create the empty rescueRoster array
//  here:

const rescueRoster = [];



// 2. Create your pet1 object here:
const pet1 = {
   name: "Nibbler",
   species: "Flargon",
   isAdopted: false,
   favoriteFoods: [
    "Moon Rocks",
     "Stardust", 
     "Comet Crumbs"
    ]
}
// 3. Write the processAdoption function here:
function processAdoption (pet) {
    pet.isAdopted = true;
    return pet;
}

// 4. Write the addPetToRoster function here:
function addPetToRoster (pet) {
    rescueRoster.push(pet)
}

// 5. Write the generatePetProfile function here:

function generatePetProfile (pet) {
    return `${pet.name} is a ${pet.species}. Their favorite snack is ${pet.favoriteFoods[0]}.\n Adopted status: ${pet.isAdopted}.`
}


// 6. Test your code (Don't change these lines!):
console.log("--- Initial Profile ---");
console.log(generatePetProfile(pet1));
console.log("--- Processing Adoption ---");
processAdoption(pet1);
addPetToRoster(pet1);
console.log(generatePetProfile(pet1));
console.log("Pets in Roster: " + rescueRoster.length);