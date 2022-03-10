//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
//Function to convert number to week day using switch case (UC10)
function numToWeekDayUsingSC() {
    let number = parseInt(prompt("Enter a number like 1,2 etc : "));
    if (number < 32) {
        switch (number % 7) {
            case 0:
                console.log("Sunday")
                break;
            case 1:
                console.log("Monday")
                break;
            case 2:
                console.log("Tuesday")
                break;
            case 3:
                console.log("Wednesday")
                break;
            case 4:
                console.log("Thursday")
                break;
            case 5:
                console.log("Friday")
                break;
            case 6:
                console.log("Saturday")
                break;
        }
    } else {
        console.log("Number should be under 31 or less than 32");
    }
}
module.exports = { numToWeekDayUsingSC };