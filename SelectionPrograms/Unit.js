//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
//Function to ead a number 1,10, 100, 1000 and display the unit , tens, hundread and thousands (UC7)
function numToUnit() {
    let number = parseInt(prompt("Enter a number between 1 to 999999 etc : "));
    let length = number.toString().length;
    if (length == 1) {
        let unit = Math.floor(number % 10);
        console.log("Unit is :" + unit);
    } else if (length == 2) {
        let unit = Math.floor(number % 10);
        console.log("Unit is :" + unit);
        let tens = Math.floor(number % 10);
        console.log("Tens is :" + tens);
    } else if (length == 3) {
        let unit = Math.floor(number % 10);
        console.log("Unit is :" + unit);
        let tens = Math.floor((number / 10) % 10);
        console.log("Tens is :" + tens);
        let hundreads = Math.floor((number / 100) % 10);
        console.log("Hundreads is :" + hundreads);
    } else if (length == 4) {
        let unit = Math.floor(number % 10);
        console.log("Unit is :" + unit);
        let tens = Math.floor((number / 10) % 10);
        console.log("Tens is :" + tens);
        let hundreads = Math.floor((number / 100) % 10);
        console.log("Hundreads is :" + hundreads);
        let thousands = Math.floor((number / 1000) % 10);
        console.log("Thousands is :" + thousands);
    } else if (length == 5) {
        let unit = Math.floor(number % 10);
        console.log("Unit is :" + unit);
        let tens = Math.floor((number / 10) % 10);
        console.log("Tens is :" + tens);
        let hundreads = Math.floor((number / 100) % 10);
        console.log("Hundreads is :" + hundreads);
        let thousands = Math.floor((number / 1000) % 10);
        console.log("Thousands is :" + thousands);
        let tenThousands = Math.floor((number / 10000) % 10);
        console.log("Ten Thousands is :" + tenThousands);
    } else if (length == 6) {
        let unit = Math.floor(number % 10);
        console.log("Unit is :" + unit);
        let tens = Math.floor((number / 10) % 10);
        console.log("Tens is :" + tens);
        let hundreads = Math.floor((number / 100) % 10);
        console.log("Hundreads is :" + hundreads);
        let thousands = Math.floor((number / 1000) % 10);
        console.log("Thousands is :" + thousands);
        let tenThousands = Math.floor((number / 10000) % 10);
        console.log("Ten Thousands is :" + tenThousands);
        let hundreadThousands = Math.floor((number / 100000) % 10);
        console.log("Hundreads Of Thousands is :" + hundreadThousands)
    } else {
        console.log("Number should be less than 7 digits");
    }
}
module.exports = { numToUnit };