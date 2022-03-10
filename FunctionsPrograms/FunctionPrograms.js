//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
let palCheckNum = require("./PalindromeCheck");
let primePalCheck = require("./PrimePalindrome");
let temp = require("./Temprature");

//Function to call repetetions programs functions(UC1-UC3)
class FunctionsPrograms {
    static getFunctionsPrograms() {
        //Displaying welcome message
        console.log("Welcome To The Functions Programs")
        while (true) {
            console.log("1: Check Palindrome Number \n2: Check Number Is Prime And Palindrome \n3: Temprature Conversion \n4: Go Back");
            let choice = parseInt(prompt("Enter a choice from above: "));
            switch (choice) {
                case 1:
                    palCheckNum.getPalindrome();
                    break;
                case 2:
                    primePalCheck.checkPrimePalindrome();
                    break;
                case 3:
                    temp.degreeConversions();
                    break;
                case 4:
                    return;
                default:
                    console.log("Wrong Choice")
                    continue;
            }
        }
    }
}
module.exports = { FunctionsPrograms };