//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
//let funPrograms = require(`/FunctionsPrograms`);

//Function to convert degree to farheinite(UC1)
function degreesInCelciusToFarheinite() {
    let celcius = parseFloat(prompt("Enter the temprature in celcius : "));
    let farheinite = parseFloat((celcius * 9 / 5) + 32).toFixed(2);
    console.log("Celsius to Fahrenheit :  : " + farheinite + " F");
}
//Function to convert farheinite to degree(UC51
function farheiniteToDegreeInCelcius() {
    let farheinite = parseFloat(prompt("Enter the temprature in farhenite : "));
    let celcius = parseFloat((farheinite - 32) * 5 / 9).toFixed(2);
    console.log("Fahrenheit to Celsius : " + celcius + " C");
}

//Main function to convert degree to farheinite and vice versa(UC1)
function degreeConversions() {
    while (true) {
        console.log("1: Degree In celcius to fahrenite \n2: Fahrenheit to degree in celcius \n3: Go Back ")
        let choice = parseInt(prompt("Enter a choice from above: "));
        switch (choice) {
            case 1:
                degreesInCelciusToFarheinite();
                break;
            case 2:
                farheiniteToDegreeInCelcius();
                break;
            case 3:
                return;
            default:
                console.log("Wrong Choice");
                continue;
        }
    }
}
module.exports = { degreeConversions };