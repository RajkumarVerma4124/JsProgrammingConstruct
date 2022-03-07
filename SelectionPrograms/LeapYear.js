//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });

//Function to check given year is leap year or not(UC3)
function checkLeapYear() {
    let year = parseInt(prompt("Enter a year to check if it is leap year or not : "));
    length = year.toString().length;
    if (length == 4) {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            console.log("It is leap year");
        } else {
            console.log("It is not a leap year");
        }
    } else {
        console.log("Enter a four digit year");
    }
}
module.exports = { checkLeapYear };