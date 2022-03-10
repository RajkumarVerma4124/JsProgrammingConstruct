//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
//Function to check the given value is prime or not(UC4)
function checkPrimeRange() {
    let startNum = parseInt(prompt("Enter a number : "));
    let endNum = parseInt(prompt("Enter a number : "));
    console.log("Prime numbers between " + startNum + " and " + endNum + " are : ");
    let count;
    //loop for finding and printing all prime numbers between given range
    for (let i = startNum; i <= endNum; i++) {
        //logic for checking number is prime or not
        count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0)
                count++;
        }
        if (count == 2)
            console.log(i);
    }
}
module.exports = { checkPrimeRange };