import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from "./loadComments";

const dishdetail = (props) => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText style={{ textAlign: "justify" }}>
                        <p>{props.dish.description}</p>
                        <p>BDT: {props.dish.price}/=</p>
                    </CardText>
                    <hr />
                    <h3>Review's and Comment's about {props.dish.name} </h3>
                    <hr />
                    <LoadComments comments={props.dish.comments} />
                </CardBody>
            </Card>
        </div >
    );
}

export default dishdetail;