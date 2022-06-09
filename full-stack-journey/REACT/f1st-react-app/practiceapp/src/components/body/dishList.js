import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const dishList = (props) => {
    // console.log(props);
    return (
        <div>
            <Card style={{ margin: "20px" }}>
                <CardBody>
                    <CardImg width="100%" alt={props.dishes.name} src={props.dishes.image} style={{ opacity: '0.7' }} />
                    <CardImgOverlay>
                        <CardTitle onClick={props.onSelectDish} style={{ cursor: "pointer", fontSize: "27px" }}>
                            {props.dishes.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default dishList;