const prompt = require("prompt-sync")();
const { addBook, menu, listBooks, removeBook } = require("./funcs");

const main = () => {
    while (true) {
        menu(); 
        let option = prompt("Choose an option: ");

        switch (option) {
            case "1":
                addBook();
                break;
                case "2":
                    listBooks();
                    break;
                case "3":
                    removeBook();
                    break;
            case "4":
                console.log("Exiting...");
                process.exit(); 
                break;
            default:
                console.log("The option is invalid. Try again.");
                break;
        }
    }
};

main();
