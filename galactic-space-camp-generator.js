
// 1. Setup your variables here:

const campName = "Mars Alpha Base";
let cadetName = "kumbizz";
let cadetAge = 15;
let isReadyForLaunch = true;

//birthday during training
cadetAge = cadetAge + 1;


// 2. Write the calculateOxygen function here:
function calculateOxygen (days) {
    return days * 3;
}


// 3. Write the generateBadge function here:
function generateBadge(name, age, missionDays) {
    let oxygenTanks = calculateOxygen(missionDays);
    return `Cadet ${name} is ${age} years old. Welcome to ${campName}. You will need ${oxygenTanks} oxygen tanks for your mission.`;

}


// 4. Test your code (Don't change these lines, just run them to see if it
// works!):

let testBadge = generateBadge(cadetName, cadetAge, 14);
console.log(testBadge);
console.log("Is the cadet ready? " + isReadyForLaunch);
