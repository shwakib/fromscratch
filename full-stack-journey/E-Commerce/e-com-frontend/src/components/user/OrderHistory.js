import React from 'react';
import { Link } from 'react-router-dom';

const OrderHistory = ({ item, serial, viewDetails }) => {
    const getCartTotal = () => {
        const arr = item.cartItems.map(item => item.price * item.count);
        const sum = arr.reduce((a, b) => a + b, 0);
        return sum;
    }

    return (
        <tr>
            <th scope="row">{serial}</th>
            <td>{item._id}</td>
            <td>{item.transaction_id}</td>
            <td>{getCartTotal()}</td>
            <td>{item.payment_status}</td>
            <td align="left">{item.address.address1},{item.address.address2}. <br />Phone: {item.address.phone} </td>
            <td>{item.payment_status === "Complete" ? <button className="btn btn-primary btn-sm" onClick={viewDetails}>View Product Details</button> : <div><Link className="btn btn-warning btn-md" to="/cart">Make Payment</Link><button style={{ margin: "10px 0px" }} className="btn btn-primary btn-sm" onClick={viewDetails}>View Product Details</button></div>}</td>
        </tr>
    )
};


export default OrderHistory;