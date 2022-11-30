import React from 'react';

const OrderHistory = ({ item, serial }) => {
    return (
        <tr>
            <th scope="row">{serial}</th>
            <td>{item._id}</td>
            <td>{item.transaction_id}</td>
            <td>{item.payment_status}</td>
            <td align="left">{item.address.address1},{item.address.address2}. <br />Phone: {item.address.phone} </td>
            <td><button className="btn btn-primary btn-sm">View Details</button></td>
        </tr>
    )
};


export default OrderHistory;