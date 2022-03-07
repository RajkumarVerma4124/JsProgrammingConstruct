//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
let programs = require("./SequencePrograms/SequencePrograms");

//Function to call the programming constructs programs
function getMainPrograms() {
    //Displaying Welcome Message
    console.log("Welcome To The Programming Constructs Of javascript")
    while (true) {
        console.log("1: Sequence Programs \n2: Exit")
        let choice = parseInt(prompt("Enter a choice from above: "));
        switch (choice) {
            case 1:
                programs.getSequencePrograms();
                break;
            case 2:
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