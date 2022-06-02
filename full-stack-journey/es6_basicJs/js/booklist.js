let form = document.querySelector("#book_form");
let bookList = document.querySelector("#book_list");

class Book { //DOM
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {

    static addBookList(book) {
        let list = document.querySelector("#book_list");
        let row = document.createElement("tr");
        row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><a href="#" class="delete">X</a></td>`;
        list.appendChild(row);
        //console.log(row);
    }
    static clearFields() {
        document.querySelector("#book_title").value = '';
        document.querySelector("#book_author").value = '';
        document.querySelector("#book_ISBN").value = '';
    }

    static showAlert(message, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector(".container");
        let form = document.querySelector("#book_form");
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    static deleteFrombook(target) {
        target.parentElement.parentElement.remove();
        console.log(target.parentElement.previousElementSibling.textContent);
        storeBooks.removeBook(target.parentElement.previousElementSibling.textContent.trim());
    }
}

class storeBooks { //Local Storage
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBooks(book) {
        let books = storeBooks.getBooks();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static displayBooks() {
        let books = storeBooks.getBooks();
        console.log(books);
        books.forEach(book => {
            console.log(book);
            UI.addBookList(book);
        })
    }

    static removeBook(isbn)
    {
        let books=storeBooks.getBooks();
        books.forEach((book,index) =>
        {
            if(book.isbn===isbn)
            {
                books.splice(index,1);
            }
        });
        localStorage.setItem('books',JSON.stringify(books));
    }
}

form.addEventListener("submit", addBook);
bookList.addEventListener("click", removeBook);
document.addEventListener("DOMContentLoaded", storeBooks.displayBooks());

function addBook(e) { //DOM

    let title = document.querySelector("#book_title").value;
    let author = document.querySelector("#book_author").value;
    let isbn = document.querySelector("#book_ISBN").value;
    // let ui = new UI();

    if (title === '' || author === '' || isbn === '') {
        UI.showAlert("Must input all fields", "error");
    }
    else {
        let book = new Book(title, author, isbn);
        UI.addBookList(book);
        UI.showAlert("Book Added", "success");
        //console.log(book);
        UI.clearFields();
        storeBooks.addBooks(book);
    }
    e.preventDefault();
}

function removeBook(e) { //DOM
    // let ui = new UI();
    if (e.target.hasAttribute("href")) {
        UI.deleteFrombook(e.target);
        UI.showAlert("Book Removed", "success");
    }
    // UI.showAlert("Book Removed", "success");
    e.preventDefault();
}