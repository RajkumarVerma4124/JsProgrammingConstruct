//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
//Function to compute prime factors of given number(UC6)
function checkPrimeFactorization() {
    let numFact = parseInt(prompt("Enter a number : "));
    for (let i = 2; i <= numFact / i; i++) {
        while (numFact % i == 0) {
            console.log("i = " + i + " factor = " + numFact);
            numFact = numFact / i;
            console.log("Prime Factor is " + i);
        }
    }
    if (numFact > 1)
        console.log("Prime Factor is " + numFact);
}
module.exports = { checkPrimeFactorization };