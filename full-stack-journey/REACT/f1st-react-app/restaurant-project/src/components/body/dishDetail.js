import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from "./loadComments";
import ComemntForm from './commentForm'

const dishdetail = (props) => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle><strong>{props.dish.name}</strong></CardTitle>
                    <CardText style={{ textAlign: "justify" }}>
                        {props.dish.description}
                    </CardText>
                    <CardText style={{ textAlign: "justify" }}>
                        BDT: {props.dish.price}/=
                    </CardText>
                    <hr />
                    <h3>Review's and Comment's about {props.dish.name} </h3>
                    <hr />
                    <LoadComments comments={props.comments} />
                    <hr />
                    <ComemntForm dishID={props.dish.id} addComment={props.addComment} />
                </CardBody>
            </Card>
        </div >
    );
}

export default dishdetail;