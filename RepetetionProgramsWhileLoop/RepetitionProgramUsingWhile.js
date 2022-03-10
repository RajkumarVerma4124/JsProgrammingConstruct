//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
let flipTillWin = require("./FlipCoinsUsingWhile");
let magicNum = require("./MagicNumber");
let gambling = require("./Gambling");
let powNum = require("./PowerOfNumUsingWhile");

//Function to call repetetions programs functions(UC1-UC4)
class RepetetionUsingWhile {
    static getRepetetionsPgUsingWhile() {
        //Displaying welcome message
        console.log("Welcome To The Repetetions Programs Using While Loop")
        while (true) {
            console.log("1: Flip Coins Till Win \n2: Magic Number \n3: Gambling Simulation \n4: Power Of Number Two Using While \n5: Go Back");
            let choice = parseInt(prompt("Enter a choice from above: "));
            switch (choice) {
                case 1:
                    flipTillWin.flipCoinUsingWhile();
                    break;
                case 2:
                    magicNum.guessNumber();
                    break;
                case 3:
                    gambling.gamblingSimulation();
                    break;
                case 4:
                    powNum.getPowerOfNumUsingWhile();
                    break;
                case 5:
                    return;
                default:
                    console.log("Wrong Choice")
                    continue;
            }
        }
    }
}
module.exports = { RepetetionUsingWhile };