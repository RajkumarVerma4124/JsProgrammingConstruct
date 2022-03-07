//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
//Function to get minimum and maximum arithmetic number using arithmetic equations (UC8)
function getMinMaxArithmetic() {
    let numOne = parseInt(prompt("Enter a number : "));
    let numTwo = parseInt(prompt("Enter a number : "));
    let numThree = parseInt(prompt("Enter a number : "));
    let ameq1 = numOne + numTwo * numThree;
    console.log("First arithemtic operation: " + ameq1);
    let ameq2 = numThree + (numOne / numTwo);
    console.log("Second arithemtic operation: " + ameq2);
    let ameq3 = numOne % numTwo + numThree;
    console.log("Third arithemtic operation: " + ameq3);
    let ameq4 = (numOne * numTwo) + numThree;
    console.log("Fourth arithemtic operation: " + ameq4);
    let maxArEq, minArEq;
    if (ameq1 > ameq2 && ameq1 > ameq3 && ameq1 > ameq4)
        maxArEq = ameq1;
    else if (ameq2 > ameq1 && ameq2 > ameq3 && ameq2 > ameq4)
        maxArEq = ameq2;
    else if (ameq3 > ameq1 && ameq3 > ameq2 && ameq3 > ameq4)
        maxArEq = ameq3;
    else
        maxArEq = ameq4;

    if (ameq1 < ameq2 && ameq1 < ameq3 && ameq1 < ameq4)
        minArEq = ameq1;
    else if (ameq2 < ameq1 && ameq2 < ameq3 && ameq2 < ameq4)
        minArEq = ameq2;
    else if (ameq3 < ameq1 && ameq3 < ameq2 && ameq3 < ameq4)
        minArEq = ameq3;
    else
        minArEq = ameq4;
    console.log(`Maximum number is : ${maxArEq}\nMinimum number is : ${minArEq}`);
}
module.exports = { getMinMaxArithmetic };