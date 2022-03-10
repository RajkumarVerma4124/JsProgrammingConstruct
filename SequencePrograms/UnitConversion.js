//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
let seqPrograms = require(`./SequencePrograms`);
//Function to convert inches to feet(UC5)
function inchesToFeet() {
    let inches = parseFloat(prompt("Enter a number in feet to convert in inches : "));
    let feet = parseFloat(inches / 12).toFixed(2);
    console.log("Inches to feet is : " + feet);
}
//Function to convert feet to inches(UC5)
function feetToInches() {
    feet = parseFloat(prompt("Enter a number in feet to convert in inches : "));
    inches = parseFloat(feet * 12).toFixed(2);
    console.log("Feet to inches is : " + inches);
}
//Function to convert feet to meters(UC5)
function feetToMeters(feet) {
    meters = parseFloat(feet * 0.3048).toFixed(2);
    console.log("Feet to meters is : " + meters);
    return meters;
}
//Function to convert feet to meters(UC5)
function metersToFeet(meters) {
    feet = parseFloat(meters * 3.28084).toFixed(2);
    console.log("Meters to feet is : " + feet);
    return feet;
}

//Function calculate area of plot in meters(UC5)
function rectangularPlot() {
    let length = parseFloat(prompt("Enter a length of plot : "));
    let breadth = parseFloat(prompt("Enter a breadth of plot : "));
    let plot = feetToMeters(length * breadth);
    console.log("Length of the plot is : " + plot)
    return plot;
}

//Function to area of plot in meters to acres(UC5)
function plotInMetersToAcres(plotInMeters) {
    acres = parseFloat(plotInMeters * 0.00024711).toFixed(2);
    console.log("Meters to acres is : " + acres);
    return acres;
}

//Main function to conversion of units and calculate plots area(UC5)
function unitConversion() {
    while (true) {
        console.log("1: Inches To Feet \n2: Feet To Inches \n3: Meters To feet \n4: Feet To Meters \n5: Calculate Rectangular Plot \n6: Calculate area of multiple plots \n7: Go Back")
        let choice = parseInt(prompt("Enter a choice from above: "));
        switch (choice) {
            case 1:
                inchesToFeet();
                break;
            case 2:
                feetToInches();
                break;
            case 3:
                meters = parseFloat(prompt("Enter a number in feet to convert in inches : "));
                metersToFeet(meters);
                break;
            case 4:
                feet = parseFloat(prompt("Enter a number in feet to convert in meters : "));
                feetToMeters(feet);
                break;
            case 5:
                rectangularPlot();
                break;
            case 6:
                plotCount = parseInt(prompt("Enter the number of plots: "));
                let totalAcres = parseFloat(plotCount * plotInMetersToAcres(rectangularPlot())).toFixed(2);
                console.log("Area of " + plotCount + " such plots is: " + totalAcres);
                break;
            case 7:
                return;
            default:
                console.log("Wrong Choice");
                continue;
        }
    }
}
module.exports = { unitConversion };