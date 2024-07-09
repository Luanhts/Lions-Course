const prompt = require('prompt-sync')();


var library = []

const addBook = (name,autor,pags,gender) => {
    const infos = {
        name: name,
        autor: autor,
        pags: pags,
        gender: gender
    };
    library.push(infos)
    console.log("Your book has been added sucessfully!!! ")
}


const removeBook = () => {
    if (library.length <= 0) {
        console.log("Você não possui nenhum livro agendado: ");
        menu();
    }

    console.log("Suas consultas agendadas: ");
    library.forEach((infos, index) => {
        console.log(`${index + 1} - Paciente: ${library.name}, Médico: ${library.nomeMed}, Data: ${library.dates}, Horário: ${library.horario}`);
    });

    readline.question("Digite o número da consulta que deseja remover: ", (indexRemove) => {
        const consultIndice = parseInt(indexRemove) - 1;

        if (consultIndice >= 0 && consultIndice < library.length) {
            library.splice(consultIndice, 1);
            console.log('livro removido!');
            menu();
        } else {
            console.log('Índice do livro inválido.');
        }
    });
}


const listBooks = () => {
    if(library.length === 0){
        console.log("You don't have any books available ")
    }else{
        console.log("Your books: ")
        library.forEach(infos => {
            console.log(`Name: ${infos.name}, Autor: ${infos.autor} the number of Pags: ${infos.pags}, Gender: ${infos.gender} `);
        });
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {

    console.log("-". repeat(15))
    console.log("THE LIBRARY")
    console.log("SEE THE OPTIONS")
    console.log("-". repeat(15))
    console.log("Digite [1] to add a book: ")
    console.log("Digite [2] to remove a book: ")
    console.log("[3] to list the books: ")
    console.log("[4] to exit")

    readline.question("Choose an option: ", option => {
        switch (option) {
            case "1":
                readline.question("Enter the name of the book: ", name =>{
                    readline.question("Enter the autor of the book: ", autor => {
                        readline.question("Enter the number of pages: ", pags => {
                            readline.question("enter the gender of the book: ", gender =>{
                                addBook(name,autor, pags, gender);
                                menu();
                                    })
                                })
                            })
                        })
                break;
            case "2":
                readline.question("Enter the name of book to be removed: ", name => {
                    removeBook(name);
                    menu()
                });
                break;
            case "3":
                listBooks();
                menu();
                break;
            case "4":
                readline.close();
                break;
            default:
                console.log("The option is invalid. try again ")
                menu();
                break;
        }
    })
}
menu();

module.exports = menu();                  