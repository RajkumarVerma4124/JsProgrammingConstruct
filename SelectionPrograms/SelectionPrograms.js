//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
let randomMinMax = require("./MinMaxValue");
let checkDayAndMonth = require("./CheckDayAndMonth");
let leapYear = require("./LeapYear");
let flipCoin = require("./FlipCoin");
let numToWord = require("./NumberToWords");
let numToWeek = require("./NumberToWeekDay");
let unit = require("./Unit");
let arithemtic = require("./Arithmetic");
let numToWordSC = require("./NumToWordsUsingSC");
let numToWeekSC = require("./NumberToWeekUsingSC");
let unitSC = require("./UnitUsingSC");

class Selection {
    //Function to call selection programs functions(UC1-UC4 && UC5-UC8)
    static getSelectionPrograms() {
        //Displaying welcome message
        console.log("Welcome To The Selection Programs")
        while (true) {
            console.log("1: Random Min Max Value \n2: Check Day And Month \n3: Check Leap Year \n4: Flip Coin \n5: Number To Word \n6: Number To Week \n7: Unit\
                \n8: Min And Max Arithmetic Equation \n9: Number To Word Using SC \n10: Number To Week Using SC \n11: Unit Using SC \n12: Go Back ")
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
                case 5:
                    numToWord.numberToWord();
                    break;
                case 6:
                    numToWeek.numToWeekDay();
                    break;
                case 7:
                    unit.numToUnit();
                    break;
                case 8:
                    arithemtic.getMinMaxArithmetic();
                    break;
                case 9:
                    numToWordSC.numberToWordUsingSC();
                    break;
                case 10:
                    numToWeekSC.numToWeekDayUsingSC();
                    break;
                case 11:
                    unitSC.numToUnitUsingSC();
                    break;
                case 12:
                    return;
                default:
                    console.log("Wrong Choice")
                    continue;
            }
        }
    }
}
module.exports = { Selection };