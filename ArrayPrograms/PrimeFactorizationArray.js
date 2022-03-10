//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
//Function to compute prime factors of given number and add it into array(UC3)
function storePrimeFactorsToArray() {
    let primeFactor = new Array();
    let numFact = parseInt(prompt("Enter a number : "));
    for (let i = 2; i <= numFact / i; i++) {
        while (numFact % i == 0) {
            console.log("i = " + i + " factor = " + numFact);
            numFact = numFact / i;
            primeFactor.push(i);
        }
    }
    if (numFact > 1) {
        primeFactor.push(numFact);
    }
    console.log("Prime Factor Is : " + primeFactor.join("  "));
}
module.exports = { storePrimeFactorsToArray };