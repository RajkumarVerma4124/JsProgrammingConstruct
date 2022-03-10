//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
//Function to take a cli n and prints the nth harmonic function value(UC2)
function getHarmonicFunction() {
    let range = parseInt(prompt("Enter a range upto which you want harmonic value : "));
    var num = 0;
    if (range != 0) {
        for (let i = 1; i <= range; i++) {
            num = num + (1 / i);
            process.stdout.write(" 1/" + i + " = " + num.toFixed(2));
            if (i < range)
                console.log("+");
        }
        console.log("\n");
    } else {
        console.log("Enter a number greater than zero");
    }
}
module.exports = { getHarmonicFunction };