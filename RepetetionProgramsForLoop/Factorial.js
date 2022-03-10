//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
//Function to check the factorial of a given number(UC5)
function checkFactorial() {
    let factNum = parseInt(prompt("Enter a number : "));
    let factorial = 1;
    for (let i = 1; i <= factNum; i++) {
        factorial *= i;
    }
    console.log("The Factorial Of " + factNum + " is " + factorial);
}
module.exports = { checkFactorial };