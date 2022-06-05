import React from "react";
import Book from '../representational/Book'

const BookList = (props) => {
    return (
        props.books.map((book, index) => {
            // console.log(book.bookName);
            // console.log(book.bookWriter);
            // console.log(index);
            return (
                <Book
                    bookName={book.bookName}
                    bookWriter={book.bookWriter}
                    delete={() => props.deletBookState(index)}
                    key={book.id}
                    inputName={(event) => props.changeWithInput(event, index)}
                />
            )
        })
    )
}

export default BookList;