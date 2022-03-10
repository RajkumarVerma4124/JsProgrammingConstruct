//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
let dice = require("./RandomDice");
let number = require("./RandomNumber");
let diceTotal = require("./AddTwoDiceNumber");
let twoDigitTotal = require("./AddRandomTwoDigits");
let conversion = require("./UnitConversion");

//Function to call sequence programs functions(UC1-UC5)
class Sequence {
    static getSequencePrograms() {
        //Displaying welcome message
        console.log("Welcome To The Sequence Programs")
        while (true) {
            console.log("1: Random Number \n2: Random Dice Number \n3: Addition of two dice \n4: Additon of five random two digits number \n5: Unit Conversions \n6: Go Back")
            let choice = parseInt(prompt("Enter a choice from above: "));
            switch (choice) {
                case 1:
                    number.getRandomNumber();
                    break;
                case 2:
                    dice.getRandomDiceNumber();
                    break;
                case 3:
                    diceTotal.getAdditionOfDice();
                    break;
                case 4:
                    twoDigitTotal.getAdditionOfRandomDigits();
                    break;
                case 5:
                    conversion.unitConversion();
                    break;
                case 6:
                    return;
                default:
                    console.log("Wrong Choice")
                    continue;
            }
        }
    }
}
module.exports = { Sequence };