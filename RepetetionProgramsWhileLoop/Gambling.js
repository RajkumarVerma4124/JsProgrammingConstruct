//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
//Function to check head and tails till head or tails win 11 times(UC4)
function gamblingSimulation() {
    let initialMoney = 100;
    let goalMoney = 200;
    let bets = 0;
    let wins = 0;
    let betWins = 0;
    let betLoss = 0;
    let rounds = parseInt(prompt("Enter how many rounds you wanna play : "));
    for (let i = 0; i < rounds; i++) {
        let money = initialMoney;
        while (money > 0 && money < goalMoney) {
            if (money < 0) {
                console.log("You are out of money")
            } else {
                bets++;
            }
            if (Math.floor(Math.random() * 10) % 2 == 0) {
                money++;
                betWins++;
            } else {
                money--;
                betLoss++;
            }
            if (money == goalMoney) {
                wins++;
            }
        }
    }
    console.log("Total Bet Wins During The Game : " + betWins);
    console.log("Total Bet loss During The Game : " + betLoss);
    console.log("Total No. Of Bets Made During The Game : " + bets);
    console.log("Wins From Total Of : " + rounds + " Rounds");
    let totalWin = (betWins * 100) / bets;
    console.log("Percentage Of Wins Is : " + totalWin.toFixed(2))
    let totalLoss = (betLoss * 100) / bets;
    console.log("Percentage Of Loss Is : " + totalLoss.toFixed(2))
    let averageBets = (betWins + betLoss) / 2;
    console.log("Average Of Bets Is : " + averageBets.toFixed(2))
}
module.exports = { gamblingSimulation };