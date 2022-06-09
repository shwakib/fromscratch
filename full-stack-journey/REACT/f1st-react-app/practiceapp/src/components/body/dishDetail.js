import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './loadComments'

const dishDetail = props => {
    console.log(props);
    return (
        <div>
            <Card style={{ marginTop: "15px" }}>
                <CardImg top src={props.selectedItem.image} alt={props.selectedItem.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.selectedItem.name}</CardTitle>
                    <CardText style={{ textAlign: "justify" }}>
                        {props.selectedItem.description}
                    </CardText>
                    <CardText style={{ textAlign: "justify" }}>
                        BDT: {props.selectedItem.price}/=
                    </CardText>
                    <hr />
                    <h3>Review's and Comment's about {props.selectedItem.name} </h3>
                    <LoadComments items={props.selectedItem.comments} />
                </CardBody>
            </Card>
        </div>
    )
}

export default dishDetail;