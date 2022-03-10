//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
//Function to find numbers guessed by user(UC2)
function guessNumber() {
    let num = parseInt(prompt("Think of a number between 1 to 100: "));
    let max = 100;
    let midValue = 0;
    while (midValue < num) {
        midValue = max / 2;
        if (num == midValue) {
            console.log("Your number is found : " + num)
        }
        if (num < midValue) {
            while (midValue != 1) {
                midValue--;
                if (num == midValue) {
                    console.log("Your number is found : " + num)
                    break;
                }
            }
        }
        if (num > midValue) {
            while (midValue != 100) {
                midValue++;
                if (num == midValue) {
                    console.log("Your number is found : " + num)
                    break;
                }
            }
        }
    }
}
module.exports = { guessNumber };