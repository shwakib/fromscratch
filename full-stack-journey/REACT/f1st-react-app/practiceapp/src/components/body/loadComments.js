import React from "react";
import dateFormat from 'dateformat';

const loadComments = props => {
    return (
        props.items.map(item => {
            return (
                <div key={item.id}>
                    <h5>{item.author}</h5>
                    <p>{item.comment}</p>
                    <p>{dateFormat(item.date, "dddd,mmmm dS,yyyy,h:MM TT")}</p>
                    <hr />
                </div>
            )
        })
    )
}

export default loadComments;