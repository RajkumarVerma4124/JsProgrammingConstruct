//Function to check head and tails till head or tails win 11 times(UC4)
function flipCoinUsingWhile() {
    let heads = 0;
    let tails = 0;
    while (heads < 11 && tails < 11) {
        coin = Math.floor(Math.random() * 10) % 2;
        if (coin == 0) {
            heads++;
        } else {
            tails++;
        }
    }
    console.log("Heads Is : " + heads);
    console.log("Tails Is : " + tails);
    if (heads == 11) {
        console.log("Heads Wins : " + heads);
    }
    if (tails == 11) {
        console.log("Tails Wins : " + tails);
    }
}
module.exports = { flipCoinUsingWhile };