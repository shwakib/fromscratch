import React from "react";

const Order = props => {
    const ingredientsSummary = props.order.ingredients.map(item => {
        return (
            <span key={item.type} style={{
                border: '1px solid grey',
                borderRadius: '5px',
                padding: '5px',
                marginRight: '10px',
            }}>
                {item.amount} X <span style={{ textTransform: "capitalize" }}>{item.type} </span>
            </span>
        )
    })
    return (
        <div style={{
            border: '1px solid grey',
            boxShadow: '1px 1px #888888',
            borderRadius: '5px',
            padding: '20px',
            marginBottom: '10px'
        }}>
            <p>Order Number: {props.order.id}</p>
            <p>Delivery Address: {props.order.customerInfo.deliveryAddress}</p>
            <hr />
            {ingredientsSummary}
            <p style={{ paddingTop: '15px' }}>Total Price: {props.order.price}/=</p>
        </div>
    )
}

export default Order;