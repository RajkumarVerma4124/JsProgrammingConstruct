//importing require modules
let dice = require("./RandomDice");

//Function to add two random dice number(UC3)
function getAdditionOfDice() {
    let diceOne = dice.getRandomDiceNumber();
    let diceTwo = dice.getRandomDiceNumber();
    let diceTotal = diceOne + diceTwo;
    console.log("Addition of two dice is : " + diceTotal)
}
module.exports = { getAdditionOfDice };