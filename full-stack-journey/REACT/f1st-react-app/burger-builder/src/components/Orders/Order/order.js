import React from "react";

const Order = props => {
    const ingredientsSummary = props.order.ingredients.map(item => {
        return (
            <span key={item.type} style={{
                border: '1px solid grey',
                borderRadius: '5px',
                padding: '5px',
                marginRight: '5px',
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
            <p>Order Placed at: {props.order.orderTime}</p>
            <hr />
            <p >Ingredients with Burger: {ingredientsSummary}</p>
            <p style={{ paddingTop: '15px' }}>Total Price: {props.order.price}/=</p>
        </div>
    )
}

export default Order;