import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';
import dateFormat from 'dateformat';

const loadComments = (props) => {
    //console.log(props.comments);
    return (
        props.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <h5>{comment.author}</h5>
                    <p>{comment.comment}</p>
                    <p>{dateFormat(comment.date, "dddd,mmmm dS,yyyy,h:MM TT")}</p>
                    <hr />
                </div>
            )
        })
    )
}

export default loadComments;