//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });

//Arrow function to genrate random b/w 1-12 i.e get month(UC2)
let getBirthMonthNumber = () => Math.floor(Math.random() * 12) + 1;

//Function to find people with same birth month and print using map(UC2)
function findPersonWithSameBirthMonth() {
    //Using Map to store month and individuals having bday on that month(UC2)
    let birthMonthMap = new Map();
    for (let i = 1; i <= 50; i++) {
        let personsWithSameBirthMonth = '';
        let month = getBirthMonthNumber();
        //Check whether it already has values
        if (birthMonthMap.has(month))
            personsWithSameBirthMonth = birthMonthMap.get(month);
        //Appending old value with new one
        personsWithSameBirthMonth = personsWithSameBirthMonth + (`Person : ${i}\t`);
        //Setting it to map
        birthMonthMap.set(month, personsWithSameBirthMonth);
    }
    for (let [key, value] of birthMonthMap)
        console.log(`Birth Month : ${key} \tPerson With Same Birth Month Are : ${value}`);
}
module.exports = { findPersonWithSameBirthMonth };