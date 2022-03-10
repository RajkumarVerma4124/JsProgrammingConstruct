//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
let seqPrograms = require("./SequencePrograms/SequencePrograms");
let selPrograms = require("./SelectionPrograms/SelectionPrograms");

class MainPrograms {
    //Function to call the programming constructs programs
    static getMainPrograms() {
        //Displaying Welcome Message
        console.log("Welcome To The Programming Constructs Of javascript")
        while (true) {
            console.log("1: Sequence Programs \n2: Selection Programs\n3: Exit")
            let choice = parseInt(prompt("Enter a choice from above: "));
            switch (choice) {
                case 1:
                    seqPrograms.Sequence.getSequencePrograms();
                    break;
                case 2:
                    selPrograms.Selection.getSelectionPrograms();
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
}
MainPrograms.getMainPrograms();
module.exports = { MainPrograms };