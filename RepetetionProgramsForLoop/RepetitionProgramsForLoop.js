//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
let powerNum = require("./PowerOfNum");
let hNum = require("./HarmonicNumber");
let chkprime = require("./CheckPrime");
let chkPrimeRange = require("./CheckPrimeRange");
let factorial = require("./Factorial");
let pFactor = require("./PrimeFactorization");

//Function to call repetetions programs functions(UC1-UC6)
class RepetetionUsingForLoop {
    static getRepetetionsPrograms() {
        //Displaying welcome message
        console.log("Welcome To The Repetetions Programs Using For Loop")
        while (true) {
            console.log("1: Power Of Number \n2: Harmonic Number \n3: Check Prime Number \n4: Print Prime Numbers In Range \n5: Factorial \n6: Prime Factorization \n7: Go Back");
            let choice = parseInt(prompt("Enter a choice from above: "));
            switch (choice) {
                case 1:
                    powerNum.getPowerOfNum();
                    break;
                case 2:
                    hNum.getHarmonicFunction();
                    break;
                case 3:
                    chkprime.checkPrimeNumber();
                    break;
                case 4:
                    chkPrimeRange.checkPrimeRange();
                    break;
                case 5:
                    factorial.getFactorial();
                    break;
                case 6:
                    pFactor.checkPrimeFactorization();
                    break;
                case 7:
                    return;
                default:
                    console.log("Wrong Choice")
                    continue;
            }
        }
    }
}
module.exports = { RepetetionUsingForLoop };