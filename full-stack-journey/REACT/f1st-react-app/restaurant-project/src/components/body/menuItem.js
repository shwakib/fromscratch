import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';
import { baseURL } from "../../redux/baseURL";

const menuItem = (props) => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg width="100%" alt={props.dish.name} src={baseURL + props.dish.image} style={{ opacity: '0.7' }} />
                    <CardImgOverlay>
                        <CardTitle onClick={props.DishSelect} style={{ cursor: "pointer" }}>
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div >
    )
}

export default menuItem;