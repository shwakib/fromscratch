import React, { useEffect, useState } from "react";
import "../../utils/CSS/modalStyle.css";
import { API } from '../../utils/config';
import { getProductDetails } from '../../api/apiProducts';

const CartItem = ({ item, i }) => {
    const [productName, setProductName] = useState();

    useEffect(() => {
        getProductDetails(item.product)
            .then(res => { setProductName(res.data.name) });
    }, []);

    return (
        <tr key={item._id}>
            <th scope="row">{i + 1}</th>
            <th><img src={`${API}/product/photo/${item.product}`} alt={item.product.name} width="60px" height="50px" /></th>
            <td>{productName == undefined ? "Getting Name" : productName}</td>
            <td align="center">{item.count}</td>
            <td align="center">৳ {item.price * item.count} </td>
        </tr>
    )
}

const Modal = ({ open, onClose, item }) => {
    if (!open) return null;
    return (
        <div onClick={onClose} className='overlay'>
            <div onClick={(e) => { e.stopPropagation(); }} className='modalContainer'>
                <div className='modalRight'>
                    <button className="btn btn-danger btn-sm closeBtn" onClick={onClose}>Close</button>
                    <div className='content'>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" width="15%">#</th>
                                    <th scope="col">Product Image</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col" align="right">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {item.cartItems.map((item, i) =>
                                    <CartItem item={item} i={i} key={item._id} />
                                )}
                            </tbody>
                        </table>
                    </div>
                    {/* <div className='btnContainer'>
                        <button className='btnPrimary'>
                            <span className='bold'>YES</span>, I love NFT's
                        </button>
                        <button className='btnOutline'>
                            <span className='bold'>NO</span>, thanks
                        </button>
                    </div> */}
                </div>
            </div>
        </div >
    );
};

export default Modal;