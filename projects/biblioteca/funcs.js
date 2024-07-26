const prompt = require("prompt-sync")();

let library = []; 

function menu() {
    console.log("-".repeat(15));
    console.log("THE LIBRARY");
    console.log("SEE THE OPTIONS");
    console.log("-".repeat(15));
    console.log(`[1] to add a book:
[2] to list the books:
[3] to remove a book:
[4] to exit`);
}

const modelo = () => {
    const name = prompt("Enter the name of the book: ");
    const autor = prompt("Enter the author of the book: "); 
    const pags = parseInt(prompt("Enter the number of pages: "), 10); 
    const gender = prompt("Enter the genre of the book: "); 

    if (name !== "" && autor !== "" && gender !== "" && !isNaN(pags)) {
        return {
            name,
            autor,
            pags,
            gender
        };
    } else {
        console.log("Invalid data");
        return undefined;
    }
};

const addBook = () => {
    const book = modelo();
    if (book !== undefined) {
        library.push(book);
        console.log("Book registered successfully");
        listBooks(); 
    }
};

const removeBook = () => {
    if (library.length === 0) {
        console.log("You don't have any books to remove.");
        return;
    }
    console.log("Your books: ");
    library.forEach((book, index) => {
        console.log(`${index + 1} - Name: ${book.name}, Author: ${book.autor}, Pages: ${book.pags}, Genre: ${book.gender}`);
    });

    let indexRemove = prompt("Enter the index of the book you want to remove: ");
    let consultIndex = parseInt(indexRemove, 10) - 1;

    if (consultIndex >= 0 && consultIndex < library.length) {
        library.splice(consultIndex, 1);
        console.log('Book removed!');
    } else {
        console.log('Invalid book index.');
    }
};

const listBooks = () => {
    if (library.length === 0) {
        console.log("You don't have any books available.");
    } else {
        console.log("Your books: ");
        library.forEach((book) => {
            console.log(`Name: ${book.name}, Author: ${book.autor}, Pages: ${book.pags}, Genre: ${book.gender}`);
        });
    }
};

module.exports = { addBook, menu, listBooks, removeBook };
