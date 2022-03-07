//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
let seqPrograms = require("./SequencePrograms/SequencePrograms");
let selPrograms = require("./SelectionPrograms/SelectionPrograms");

//Function to call the programming constructs programs
function getMainPrograms() {
    //Displaying Welcome Message
    console.log("Welcome To The Programming Constructs Of javascript")
    while (true) {
        console.log("1: Sequence Programs \n2: Selection Programs\n3: Exit")
        let choice = parseInt(prompt("Enter a choice from above: "));
        switch (choice) {
            case 1:
                seqPrograms.getSequencePrograms();
                break;
            case 2:
                selPrograms.getSelectionPrograms();
                break;
            case 3:
                process.exit(1)
                break;
            default:
                console.log("Wrong Choice");
                continue;
        }
    }
}
getMainPrograms();
module.exports = { getMainPrograms };