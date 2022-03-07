//Function to min and max value by generating five random numbers of three digits(UC1)
function getMaxAndMinValue() {
    let randomNumArray = new Array();
    for (var i = 0; i < 5; i++) {
        randomNumber = Math.floor(Math.random() * 899) + 100;
        randomNumArray.push(randomNumber);
        console.log(i + " Random Three digit value: " + randomNumArray[i]);
    }
    randomNumArray.sort();
    console.log("\nMaximum value is: " + randomNumArray[4] + "\nMinimum value is: " + randomNumArray[0]);
}
module.exports = { getMaxAndMinValue };