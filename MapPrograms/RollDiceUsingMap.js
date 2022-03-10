//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });

//Arrow function to get a random dice number(UC1a)
let getRandomDiceNumber = () => Math.floor(Math.random() * 6) + 1;

//Function to roll dice until one is reached 10(UC1b && UC1c && UC1d)
function rollDice() {
    let limit = 10,
        count = 0;
    //Creating map to store dice roll and there count
    let diceRolledMap = new Map();
    while (count < limit) {
        let diceRoll = getRandomDiceNumber();
        let countDiceRolls = 1;
        //Checking whether map alread has the element
        if (diceRolledMap.has(diceRoll)) {
            countDiceRolls = diceRolledMap.get(diceRoll) + 1;
        }
        //Setting the map with dice rolled and count of occurence(UC1c)
        diceRolledMap.set(diceRoll, countDiceRolls);
        if (countDiceRolls > count) {
            count = countDiceRolls;
        }
    }
    for (let [key, value] of diceRolledMap) {
        console.log(`Dice Value : ${key} \tDice Count : ${value}`);
    }
    //Calling the function to find min max dice rolls(UC1e)
    findMinMaxDiceRolls(diceRolledMap)
}

//Function to find min max dice rolled using map(UC1e)
function findMinMaxDiceRolls(diceRolledMap) {
    //initialising max and min to find which dice rolled maximum and minimum times(UC1)
    let max = 0,
        min = 11,
        maxDiceRoll, minDiceRoll;
    for (let [key, value] of diceRolledMap) {
        if (value > max) {
            max = value;
            maxDiceRoll = key;
        }
        if (value < min) {
            min = value;
            minDiceRoll = key;
        }
    }
    console.log(`Maximum Dice Rolled Was : ${maxDiceRoll} \tMinimum DIce Rolled Was : ${minDiceRoll}`);
}
module.exports = { rollDice };