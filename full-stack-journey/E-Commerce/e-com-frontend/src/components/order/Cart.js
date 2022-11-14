import Layout from '../Layout';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCartItems, updateCartItems, deleteCartItem, updateCartCount } from '../../api/apiOrder';
import { userInfo } from '../../utils/auth';
import CartItem from './CartItem';
import { showError } from '../../utils/messages';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [error, setError] = useState(false);

    const loadCart = () => {
        getCartItems(userInfo().token)
            .then(response => setCartItems(response.data))
            .catch(err => setError("Failed to load products!"))
    }

    useEffect(() => {
        loadCart();
    }, [])

    const increaseItem = (item) => () => {
        if (item.count === 5) return
        const cartItem = {
            ...item,
            count: item.count + 1,
            quantity: item.quantity - 1
        }
        // alert(item.product._id);
        const token = userInfo().token;
        updateCartItems(token, cartItem)
            .then(response => {
                const cartCount = {
                    product_id: item.product._id,
                    product_quantity: item.quantity - 1
                }
                updateCartCount(token, cartCount)
                    .then(response => loadCart());
            })
            .catch(err => setError("Failed to load products!"))
    }

    const decreaseItem = (item) => () => {
        if (item.count === 1) return
        const cartItem = {
            ...item,
            count: item.count - 1,
            quantity: item.quantity + 1
        }
        const token = userInfo().token;
        updateCartItems(token, cartItem)
            .then(response => {
                const cartCount = {
                    product_id: item.product._id,
                    product_quantity: item.quantity + 1
                }
                updateCartCount(token, cartCount)
                    .then(response => loadCart());
            })
            .catch(err => setError("Failed to load products!"))
    }

    const getCartTotal = () => {
        const arr = cartItems.map(item => item.price * item.count);
        const sum = arr.reduce((a, b) => a + b, 0);
        return sum;
    }

    const removeItem = (item) => () => {
        const token = userInfo().token;
        if (!window.confirm("Delete Item?")) return
        deleteCartItem(token, item)
            .then(response => {
                const cartCount = {
                    product_id: item.product._id,
                    product_quantity: item.quantity + item.count
                }
                updateCartCount(token, cartCount)
                    .then(response => loadCart());
            })
            .catch(err => setError("Failed to load products!"))
    }

    return (
        <Layout title="Your Cart" description="Hurry up! Place your order!" className="container">
            <div style={{ width: "100%" }}>
                {showError(error, error)}
            </div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Order</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Cart</li>
                </ol>
            </nav>
            <div className="container my-5">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" width="15%">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col" align="right">Price</th>
                            <th scop="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item, i) => <CartItem item={item} serial={i + 1} key={item._id} increaseItem={increaseItem(item)} decreaseItem={decreaseItem(item)} removeItem={removeItem(item)} />)}
                        <tr>
                            <th scope="row" />
                            <td colSpan={3}>Total</td>
                            <td align="right">৳ {getCartTotal()}</td>
                            <td />
                        </tr>
                        <tr>
                            <th scope="row" />
                            <td colSpan={5} className="text-right">
                                <Link to="/"><button className="btn btn-warning mr-4">Continue Shoping</button></Link>
                                <Link to="/shipping-address" className="btn btn-success mr-4">Proceed To Checkout</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default Cart;