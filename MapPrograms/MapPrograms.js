//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
let rollDice = require("./RollDiceUsingMap");
let birthMonth = require("./BirthMonth");

//Function to call map programs functions(UC1-UC2)
class MapPrograms {
    static getMapPrograms() {
        //Displaying welcome message
        console.log("Welcome To The Map Programs")
        while (true) {
            console.log("1: Roll Dice Till One Of Number Reaches 10 \n2: Find Person With Same Birth Month \n3: Go Back");
            let choice = parseInt(prompt("Enter a choice from above: "));
            switch (choice) {
                case 1:
                    rollDice.rollDice();
                    break;
                case 2:
                    birthMonth.findPersonWithSameBirthMonth();
                    break;
                case 3:
                    return;
                default:
                    console.log("Wrong Choice")
                    continue;
            }
        }
    }
}
module.exports = { MapPrograms };