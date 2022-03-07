//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
//Function to convert number to week day using if else if else (UC6)
function numToWeekDay() {
    let number = parseInt(prompt("Enter a number like 1,2 etc : "));
    if (number < 32) {
        if (number % 7 == 1) {
            console.log("Monday")
        } else if (number % 7 == 2) {
            console.log("Tuesday")
        } else if (number % 7 == 3) {
            console.log("Wednesday")
        } else if (number % 7 == 4) {
            console.log("Thurday")
        } else if (number % 7 == 5) {
            console.log("Friday")
        } else if (number % 7 == 6) {
            console.log("Saturday")
        } else if (number % 7 == 0) {
            console.log("Sunday")
        } else {
            console.log("Number should be under 31 or less than 32");
        }
    } else {
        console.log("Number should be under 31 or less than 32");
    }
}
module.exports = { numToWeekDay };