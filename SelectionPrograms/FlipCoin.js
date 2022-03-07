//Function to check head and tails(UC4)
function flipCoin() {
    coin = Math.floor(Math.random() * 10) % 2;
    if (coin == 0) {
        console.log("Heads")
    } else {
        console.log("Tails")
    }
}
module.exports = { flipCoin };