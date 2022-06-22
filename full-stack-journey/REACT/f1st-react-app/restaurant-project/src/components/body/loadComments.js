import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';
import dateFormat from 'dateformat';
import Loading from "./loading";

const loadComments = (props) => {
    //console.log(props.comments);
    if (props.commentsIsLoading) {
        return (
            <Loading />
        )
    }
    else {
        return (
            props.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <h5>{comment.author}</h5>
                        <p>Comment: {comment.comment}</p>
                        <p>Rating: {comment.rating}</p>
                        <p>{dateFormat(comment.date, "dddd,mmmm dS,yyyy,h:MM TT")}</p>
                        <hr />
                    </div>
                )
            })
        )
    }
}


export default loadComments;