//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
//Function to convert single digit number to words using if else if else (UC5)
function numberToWord() {
    let number = parseInt(prompt("Enter a single digit number : "));
    let length = number.toString().length;
    if (length == 1) {
        if (number == 0) {
            console.log("Zero")
        } else if (number == 1) {
            console.log("One")
        } else if (number == 2) {
            console.log("Two")
        } else if (number == 3) {
            console.log("Three")
        } else if (number == 4) {
            console.log("Four")
        } else if (number == 5) {
            console.log("Five")
        } else if (number == 6) {
            console.log("Six")
        } else if (number == 7) {
            console.log("Seven")
        } else if (number == 8) {
            console.log("Eight")
        } else if (number == 9) {
            console.log("Nine")
        } else {
            console.log("Number should be single digit only");
        }
    } else {
        console.log("Number should be single digit only");
    }
}
module.exports = { numberToWord };