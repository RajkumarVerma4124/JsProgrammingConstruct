//Function to take a range from 0 to 100 and find the digits that are repeated twice like 33, 77,etc and store them in an array(UC4)
function findRepeatedNumber() {
    let repeatedNumArray = new Array();
    for (let i = 1; i <= 100; i++) {
        if (i % 11 == 0) {
            repeatedNumArray.push(i);
        }
    }
    console.log(`The repeated numbers are : ${repeatedNumArray.join(' : ')}`);
}
module.exports = { findRepeatedNumber };