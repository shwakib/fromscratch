import React from "react";

const Book = props => {
    return (
        <div>
            <h3>Book Name: {props.bookName}</h3>
            <h3>Writer: {props.bookWriter}</h3>
        </div>
    )
}

export default Book;