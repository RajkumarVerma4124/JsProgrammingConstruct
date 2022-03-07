//Getting a random number with single digit(UC1)
function getRandomNumber() {
    let randomNum = Math.floor(Math.random() * 10);
    console.log("Random single digit value is : " + randomNum);
}
module.exports = { getRandomNumber };