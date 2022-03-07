//Function to get a random dice number(UC2)
function getRandomDiceNumber() {
    let randomDiceNum = Math.floor(Math.random() * 6) + 1;
    console.log("Dice number is: " + randomDiceNum);
    return randomDiceNum;
}
module.exports = { getRandomDiceNumber };