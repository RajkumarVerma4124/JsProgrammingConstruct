//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });

//Function to check given number is palindrome or not(UC3)
function checkPalindrome(primeValue) {
    let palChar = primeValue.toString().split('');
    let tempStr = "";
    for (let i = palChar.length - 1; i >= 0; i--) {
        // Append each character to the temp string.
        tempStr += palChar[i];
    }
    if (parseInt(tempStr) == primeValue)
        console.log(primeValue + " Is Palindrome");
    else
        console.log(primeValue + " Is Not A Palindrome");
    let palPrime = checkPrimeNumber(parseInt(tempStr))
    return palPrime
}

//Function to check the given value is prime or not(UC3)
function checkPrimeNumber(pNum) {
    let count = 0;
    for (let i = 2; i <= pNum; i++) {
        if (pNum % i == 0)
            count++;
    }
    if (count == 1) {
        return true;
    } else {
        return false;
    }
}

//Function to take numbers to check for prime and palindrome(UC3)
function checkPrimePalindrome() {
    let value = parseInt(prompt("Enter a numbers to check prime and its palindrome is also prime : "));
    let primeValue = checkPrimeNumber(value);
    if (primeValue) {
        console.log(value + " Is Prime Number");
    } else
        console.log(value + " Is Not A Prime Number");
    let palPrime = checkPalindrome(value);
    if (palPrime) {
        console.log(value + "'s Palindrome Is A Prime Number");
    } else
        console.log(value + "'s Palindrome Is Not A Prime Number");
}
module.exports = { checkPrimePalindrome };