//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
let randomMinMax = require("./MinMaxValue");
let checkDayAndMonth = require("./CheckDayAndMonth");
let leapYear = require("./LeapYear");
let flipCoin = require("./FlipCoin");
let mProgram = require("../MainProgram");

//Function to call selection programs functions(UC1-UC4)
function getSelectionPrograms() {
    //Displaying welcome message
    console.log("Welcome To The Selection Programs")
    while (true) {
        console.log("1: Random Min Max Value \n2: Check Day And Month \n3: Check Leap Year \n4: Flip Coin \n5: Go Back")
        let choice = parseInt(prompt("Enter a choice from above: "));
        switch (choice) {
            case 1:
                randomMinMax.getMaxAndMinValue();
                break;
            case 2:
                checkDayAndMonth.checkDayAndMonth();
                break;
            case 3:
                leapYear.checkLeapYear();
                break;
            case 4:
                flipCoin.flipCoin();
                break;
            case 4:
                mProgram.getMainPrograms();
                break;
            default:
                console.log("Wrong Choice")
                continue;
        }
    }
}
module.exports = { getSelectionPrograms };