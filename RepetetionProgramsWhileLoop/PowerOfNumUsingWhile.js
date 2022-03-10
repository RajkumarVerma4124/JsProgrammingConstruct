//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
//Function to take cli n and print the table of the powers of  2 that are less than or equal to 2^n(UC1)
function getPowerOfNumUsingWhile() {
    let powNum = parseInt(prompt("Enter a number upto which you want power of 2 : "));
    let resOfPow = 0,
        i = 0;
    while (i <= powNum) {
        if (resOfPow < 256) {
            resOfPow = parseInt(Math.pow(2, i));
            console.log("The Power Of 2 ^ " + i + " is : " + resOfPow);
            i++;
        } else {
            break;
        }
    }
}
module.exports = { getPowerOfNumUsingWhile };