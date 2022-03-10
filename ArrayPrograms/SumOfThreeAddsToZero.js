//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
//Function to compute sum of three numbers add to zero using array(UC4)
function sumOfThreeNum() {
    let count = 0;
    let numArray = new Array();
    let rangeValue = parseInt(prompt("Enter the range of numbers you want to add : "));
    for (let i = 0; i < rangeValue; i++) {
        let num = parseInt(prompt(`Enter ${i+1} number : `));
        numArray[i] = num;
    }
    process.stdout.write(numArray.join(" || "));
    console.log(` are the numbers you added\n`);
    for (let i = 0; i < rangeValue; i++) {
        for (let j = i + 1; j < rangeValue; j++) {
            for (let k = j + 1; k < rangeValue; k++) {
                if (numArray[i] + numArray[j] + numArray[k] == 0) {
                    count++
                    console.log(`${ numArray[i]} + ${numArray[j]} + ${numArray[k]} = 0 `);
                }
            }
        }
    }
    console.log(`Count of total array added to zero is: ${count}`)
}
module.exports = { sumOfThreeNum };