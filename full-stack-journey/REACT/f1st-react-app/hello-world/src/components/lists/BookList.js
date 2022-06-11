import React, { Component } from "react";
import Book from '../representational/Book'

// const BookList = (props) => {
//     return (
//         props.books.map((book, index) => {
//             // console.log(book.bookName);
//             // console.log(book.bookWriter);
//             // console.log(index);
//             return (
//                 <Book
//                     bookName={book.bookName}
//                     bookWriter={book.bookWriter}
//                     delete={() => props.deletBookState(index)}
//                     key={book.id}
//                     inputName={(event) => props.changeWithInput(event, index)}
//                 />
//             )
//         })
//     )
// }

class BookList extends Component {
    constructor(props) {
        super(props);
        console.log("Booklist COnstructor");
    }

    UNSAFE_componentWillMount() {
        console.log("BookList Component will mount");
    }

    componentDidMount() {
        console.log("BookList Component Did mount");
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("U BookList componentWillReceiveProps", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("U BookList shouldComponentUpdate", nextProps, nextState);
        return false;
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("U BookList WillComponentUpdate", nextProps, nextState);
    }

    componentDidUpdate(nextProps, nextState) {
        console.log("U BookList componentDidUpdate", nextProps, nextState);
    }

    render() {
        console.log("BookList Render will mount");
        return (
            this.props.books.map((book, index) => {
                // console.log(book.bookName);
                // console.log(book.bookWriter);
                // console.log(index);
                return (
                    <Book
                        bookName={book.bookName}
                        bookWriter={book.bookWriter}
                        delete={() => this.props.deletBookState(index)}
                        key={book.id}
                        inputName={(event) => this.props.changeWithInput(event, index)}
                    />
                )
            })
        )
    }
}

export default BookList;