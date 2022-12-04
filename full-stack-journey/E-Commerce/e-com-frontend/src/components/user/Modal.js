import React from "react";
import "../../utils/CSS/modalStyle.css";
import { API } from '../../utils/config';

const Modal = ({ open, onClose, item }) => {
    console.log(item.cartItems);
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
                                {item.cartItems.map((item, i) => <tr >
                                    <th scope="row">{i + 1}</th>
                                    <th><img src={`${API}/product/photo/${item.product}`} alt={item.product.name} width="50px" /></th>
                                    <td>{item.product.name ? item.product.name : ""}</td>
                                    <td align="center">{item.count}</td>
                                    <td align="center">৳ {item.price * item.count} </td>
                                </tr>)}
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