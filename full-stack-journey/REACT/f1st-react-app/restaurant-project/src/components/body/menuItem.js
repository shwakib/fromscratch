import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const menuItem = (props) => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image} style={{ opacity: '0.5' }} />
                    <CardImgOverlay>{props.dish.name}</CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default menuItem;