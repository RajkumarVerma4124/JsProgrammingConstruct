//Function to add five random two digits number to find sum and there average(UC4)
function getAdditionOfRandomDigits() {
    let sum = 0;
    let randomNum = 0;
    for (var i = 1; i <= 5; i++) {
        randomNum = Math.floor(Math.random() * 100 + 10);
        console.log(i + " Random Two digit value: " + randomNum)
        sum += randomNum;
    }
    console.log("\nSum of five random number is: " + sum);
    console.log("Average of five random number is: " + Math.round(sum / 5));
}
module.exports = { getAdditionOfRandomDigits };