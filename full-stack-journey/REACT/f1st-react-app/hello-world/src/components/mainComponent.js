import React, { Component } from "react";
import Book from './representational/Book.js';
import bookList from '../assets/books.js';
import BookList from "./lists/BookList.js";

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: bookList,
            showBooks: true
        };
        console.log("Main Component Constructor");
    }
    // changeBookState = (newBookName) => {
    //   this.setState({
    //     books: [
    //       { bookName: "Nineteen Eighty-Four", bookWriter: "George Orwell" },
    //       { bookName: newBookName, bookWriter: "Dan Brown" },
    //       { bookName: "Metmorphosis", bookWriter: "Franz Kafka" }
    //     ]
    //   });
    // }
    changeWithInput = (event, index) => {
        const book = {
            ...this.state.books[index]
        }
        book.bookName = event.target.value;
        const books = [...this.state.books];
        books[index] = book;

        this.setState({
            books: books
        });
    }
    deletBookState = (index) => {
        //const books = this.state.books.slice();
        //const books = this.state.books.map(item => item);
        const books = [...this.state.books]
        books.splice(index, 1);
        this.setState({
            books: books
        })
    }
    toggleBooks = () => {
        this.setState({
            showBooks: !this.state.showBooks
        });
    }

    UNSAFE_componentWillMount() {
        console.log("MainComponent will mount");
    }

    componentDidMount() {
        console.log("Main Component Did mount");
    }

    // constructor() {
    //   super();
    //   this.state = {};
    // }
    render() {
        console.log("Main Component Render");
        const style = { //In React, css codes needs to be written as JS code.
            border: "1px solid red",
            borderRadius: '5px', //border-radius, - will not be used.
            backgroundColor: 'black',
            color: 'white'
        };

        // const booksState = this.state.books;
        let books = null;
        if (this.state.showBooks) {
            books = <BookList
                books={this.state.books}
                deletBookState={this.deletBookState}
                changeWithInput={this.changeWithInput} />
        }
        //console.log(books);

        return (
            <div className="App"> {/*root element should be only one and App.css has been added*/}
                <h1>Hello World</h1>
                {/* <Person name="Rahim" age="30">I am from Comilla </Person> */}
                <h1 style={style}>Book List:</h1> {/*Adding css in one single component*/}
                {/* <Book bookName="Harry Potter" bookWriter="George Orwell" />
            <Book bookName="The Da Vinci Code" bookWriter="Dan Brown" />
            <Book bookName="The Alchemist" bookWriter="Paulo Coelho" /> */}
                {/* <Book bookName={this.state.books[0].bookName} bookWriter={this.state.books[0].bookWriter} inputName={this.changeWithInput} /> 
            Sending properties to book function [bookName,bookWriter] & inputName is a variable ={this.changeWithInput} sending an event in parameter
            <Book bookName={this.state.books[1].bookName} bookWriter={this.state.books[1].bookWriter} />
            <Book bookName={this.state.books[2].bookName} bookWriter={this.state.books[2].bookWriter} change={this.changeBookState.bind(this, "Amar Bondhu Rashed")} /> Sending properties to book function [bookName,bookWriter] & change= is a variable {this.changeBookState.bind(this, "Amar Bondhu Rashed")} sending event and value as parameters */}

                <button onClick={this.toggleBooks}>Toggle Books</button>
                {/* {books} */}
                {books}

                {/* <button onClick={() => this.changeBookState("Amar Bondhu CTO")}>Change State</button> */}
                {/*onClick={() => this.changeBookState("Amar Bondhu CTO") sending bookName as parameters to an event fuction using an arrow function*/}
                {/* <input type="text" onChange={this.changeWithInput}></input> */}
            </div>
        );
    }
}

export default MainComponent;