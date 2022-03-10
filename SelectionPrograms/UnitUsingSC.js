//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
//Function to ead a number 1,10, 100, 1000 and display the unit , tens, hundread and thousands using switch case(UC11)
function numToUnitUsingSC() {
    let number = parseInt(prompt("Enter a number between 1 to 999999 etc : "));
    let length = number.toString().length;
    let unit = 0,tens = 0,hundreads = 0,thousands = 0,tenThousands = 0,hundreadThousands = 0;
    switch (length) {
        case 1:
            unit = Math.floor(number % 10);
            console.log("Unit is :" + unit);
            break;
        case 2:
            unit = Math.floor(number % 10);
            console.log("Unit is :" + unit);
            tens = Math.floor(number % 10);
            console.log("Tens is :" + tens);
            break;
        case 3:
            unit = Math.floor(number % 10);
            console.log("Unit is :" + unit);
            tens = Math.floor((number / 10) % 10);
            console.log("Tens is :" + tens);
            hundreads = Math.floor((number / 100) % 10);
            console.log("Hundreads is :" + hundreads);              
            break;
        case 4:
            unit = Math.floor(number % 10);
            console.log("Unit is :" + unit);
            tens = Math.floor((number / 10) % 10);
            console.log("Tens is :" + tens);
            hundreads = Math.floor((number / 100) % 10);
            console.log("Hundreads is :" + hundreads);
            thousands = Math.floor((number / 1000) % 10);
            console.log("Thousands is :" + thousands);            
            break;
        case 5:
            unit = Math.floor(number % 10);
            console.log("Unit is :" + unit);
            tens = Math.floor((number / 10) % 10);
            console.log("Tens is :" + tens);
            hundreads = Math.floor((number / 100) % 10);
            console.log("Hundreads is :" + hundreads);
            thousands = Math.floor((number / 1000) % 10);
            console.log("Thousands is :" + thousands);
            tenThousands = Math.floor((number / 10000) % 10);
            console.log("Ten Thousands is :" + tenThousands);
            break;
        case 6:
            unit = Math.floor(number % 10);
            console.log("Unit is :" + unit);
            tens = Math.floor((number / 10) % 10);
            console.log("Tens is :" + tens);
            hundreads = Math.floor((number / 100) % 10);
            console.log("Hundreads is :" + hundreads);
            thousands = Math.floor((number / 1000) % 10);
            console.log("Thousands is :" + thousands);
            tenThousands = Math.floor((number / 10000) % 10);
            console.log("Ten Thousands is :" + tenThousands);
            hundreadThousands = Math.floor((number / 100000) % 10);
            console.log("Hundreads Of Thousands is :" + hundreadThousands)
            break;
        default:
            console.log("Number should be less than 7 digits")
            break;
    }
}
module.exports = { numToUnitUsingSC };