//Importing the neccessary module
let prompt = require(`prompt-sync`)({ sigint: true });
let seqPrograms = require("./SequencePrograms/SequencePrograms");
let selPrograms = require("./SelectionPrograms/SelectionPrograms");
let repPgWithForLoop = require("./RepetetionProgramsForLoop/RepetitionProgramsForLoop");
let repPgUsingWhile = require("./RepetetionProgramsWhileLoop/RepetitionProgramUsingWhile");
let functionPg = require("./FunctionsPrograms/FunctionPrograms");
let arrayPg = require("./ArrayPrograms/ArrayPrograms");
let mapPg = require("./MapPrograms/MapPrograms");

class MainPrograms {
    //Function to call the programming constructs programs
    static getMainPrograms() {
        //Displaying Welcome Message
        console.log("Welcome To The Programming Constructs Of javascript")
        while (true) {
            console.log("1: Sequence Programs \n2: Selection Programs \n3: Repetition Programs Using For Loop \n4: Repetition Programs Using While Loop \n5: Function Programs \n6: Array Programs \n7: Map Programs\n8: Exit")
            let choice = parseInt(prompt("Enter a choice from above: "));
            switch (choice) {
                case 1:
                    seqPrograms.Sequence.getSequencePrograms();
                    break;
                case 2:
                    selPrograms.Selection.getSelectionPrograms();
                    break;
                case 3:
                    repPgWithForLoop.RepetetionUsingForLoop.getRepetetionsPrograms();
                    break;
                case 4:
                    repPgUsingWhile.RepetetionUsingWhile.getRepetetionsPgUsingWhile();
                    break;
                case 5:
                    functionPg.FunctionsPrograms.getFunctionsPrograms();
                    break;
                case 6:
                    arrayPg.ArrayPrograms.getArrayPrograms();
                    break;
                case 7:
                    mapPg.MapPrograms.getMapPrograms();
                    break;
                case 8:
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