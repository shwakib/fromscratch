import React from "react";

const bookDetails = (props) => {
    // console.log(props);
    if (props.book === null) {
        return <div>

        </div>
    }
    else {
        return (
            <div>
                <h1>{props.book.bookName}</h1>
                <h3>{props.book.bookWriter}</h3>
                <p style={{ textAlign: 'justify' }}>{props.book.description}</p>
            </div>
        )
    }
}

export default bookDetails;