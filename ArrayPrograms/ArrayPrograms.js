//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
let randomNumArr = require("./RandomNumberArray");
let pNumArr = require("./PrimeFactorizationArray");
let sumThreeNum = require("./SumOfThreeAddsToZero");
let rangeRepeat = require("./FindRangeRepeat");

//Function to call array programs functions(UC1-UC5)
class ArrayPrograms {
    static getArrayPrograms() {
        //Displaying welcome message
        console.log("Welcome To The Array Programs")
        while (true) {
            console.log("1: Find Second Min Max Using Random \n2: Prime Factorization Using Array \n3: Sum Of Three Number Adds To Zero  \n4: Find Repeated Numbers From 1 to 100 \n5: Go Back");
            let choice = parseInt(prompt("Enter a choice from above: "));
            switch (choice) {
                case 1:
                    randomNumArr.findSecondRandomMinAndMax();
                    break;
                case 2:
                    pNumArr.storePrimeFactorsToArray();
                    break;
                case 3:
                    sumThreeNum.sumOfThreeNum();
                    break;
                case 4:
                    rangeRepeat.findRepeatedNumber();
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
module.exports = { ArrayPrograms };