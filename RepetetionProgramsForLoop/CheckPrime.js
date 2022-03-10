//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
//Function to check the given value is prime or not(UC3)
function checkPrimeNumber() {
    let count = 0;
    let pNum = parseInt(prompt("Enter a number : "));
    for (let i = 2; i <= pNum; i++) {
        if (pNum % i == 0)
            count++;
    }
    if (count == 1)
        console.log("It Is A Prime Number");
    else
        console.log("Not a Prime Number");
}
module.exports = { checkPrimeNumber };