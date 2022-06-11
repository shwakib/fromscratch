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
    componentDidMount() {
        console.log("BookList Component Did mount");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("U BookList shouldComponentUpdate", nextProps, nextState);
        return false;
    }
    componentDidUpdate(nextProps, nextState) {
        console.log("U BookList componentDidUpdate", nextProps, nextState);
    }
    // UNSAFE_componentWillMount() {
    //     console.log("BookList Component will mount");
    // }
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log("U BookList componentWillReceiveProps", nextProps);
    // }
    // UNSAFE_componentWillUpdate(nextProps, nextState) {
    //     console.log("U BookList WillComponentUpdate", nextProps, nextState);
    // }

    //Substitute of UNSAFE_componentWillUpdate
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("BookList getDerivedStateFromProps", nextProps, prevState);
        return prevState;
    }

    getSnapshotBeforeUpdate() {
        console.log("U BookList getSnapshotBeforeUpdate");
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