//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });

//Function to check given number is palindrome or not(UC3)
function checkPalindrome(palStr) {
    let palChar = palStr.split('');
    let tempStr = "";
    for (let i = palChar.length - 1; i >= 0; i--) {
        // Append each character to the temp string.
        tempStr += palChar[i];
    }
    if (tempStr == palStr)
        console.log(palStr + " is palindrome");
    else
        console.log(palStr + " is not palindrome");
}

//Function to take numbers or string from user to check for palindrome(UC3)
function getPalindrome() {
    let strValue = prompt("Enter the numbers like 123 423 345 to check if its palindrome or not : ")
    let palStr = strValue.split(' ');
    for (let i = 0; i < palStr.length; i++) {
        checkPalindrome(palStr[i]);
    }
}
module.exports = { getPalindrome };