//Function to generate ten random 3 digits numbers and stored in array(UC1a && UC2)
function generateRandomNumbers() {
    let randomArray = new Array();
    for (var i = 1; i <= 10; i++) {
        randomNum = Math.floor(Math.random() * 899 + 100);
        //Storing the random numbers in an array(UC10b)
        randomArray.push(randomNum);
    }
    return randomArray;
}

//Function to find second minimum from given array(UC1c)
function secondMinimum(randomArr) {
    firstNum = randomArr[0];
    secondNum = randomArr[1];
    for (let i = 0; i < 10; i++) {
        if (randomArr[i] < firstNum) {
            //Swap the numbers
            secondNum = firstNum;
            firstNum = randomArr[i];
        }
        if (randomArr[i] < secondNum && randomArr[i] != firstNum) {
            //Swap the numbers
            secondNum = randomArr[i]
        }
    }
    console.log(`\n\nSecond minimum in random array is : ${secondNum}`)
}

//function to find second maximum from given array(UC2c)
function secondMaximum(randomArr) {
    firstNum = randomArr[0];
    secondNum = randomArr[1];
    for (let i = 0; i < 10; i++) {
        if (randomArr[i] > firstNum) {
            //Swap the numbers
            secondNum = firstNum;
            firstNum = randomArr[i];
        }
        if (randomArr[i] > secondNum && randomArr[i] != firstNum) {
            //Swap the numbers
            secondNum = randomArr[i]
        }
    }
    console.log(`\nSecond maximum in random array is : ${secondNum}`)
}

//Extended the above program to find second min max using sort(UC2)
function findSecondMinMaxUsingSort(randomArr) {
    let sortedRandomArr = randomArr.slice(0).sort();
    console.log(`\nSecond maximum in random array using sort is : ${sortedRandomArr[sortedRandomArr.length-2]}`)
    console.log(`\nSecond minimum in random array using sort is : ${sortedRandomArr[1]}`)
}

//Fucntion to call the max and min fucntion and print random array(UC1)
function findSecondRandomMinAndMax() {
    console.log(`Generated Random Numbers Are Listed Below: `)
    let randomArray = generateRandomNumbers();
    process.stdout.write(randomArray.join(" "))
    secondMinimum(randomArray);
    secondMaximum(randomArray);
    findSecondMinMaxUsingSort(randomArray);
}

module.exports = { findSecondRandomMinAndMax };