import { useEffect, useState } from 'react';
import Layout from '../Layout';
import { showSuccess, showError } from '../../utils/messages';
import { API } from '../../utils/config';
import { Link, useParams } from 'react-router-dom';
import { getProductDetails } from '../../api/apiProducts';
import { addToCart, updateCartCount } from '../../api/apiOrder';
import { isAuthenticated, userInfo } from '../../utils/auth';
import * as Star from '../../App.css';

const ProductDetails = (props) => {
    const [product, setProducts] = useState({});
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    let { id } = useParams();

    useEffect(() => {
        getProductDetails(id)
            .then(response => {
                setProducts(response.data);
            })
            .catch(err => setError("Failed To Load Products"));
    }, [])

    const handleAddToCart = product => () => {
        if (isAuthenticated()) {
            setError(false);
            setSuccess(false);
            const user = userInfo();
            const cartItem = {
                user: user._id,
                product: product._id,
                price: product.price,
                quantity: product.cartQuantity - 1
            }
            addToCart(user.token, cartItem)
                .then(response => {
                    setSuccess(true);
                    product.cartQuantity = product.cartQuantity - 1;
                    const cartCount = {
                        product_id: product,
                        product_quantity: product.cartQuantity
                    }
                    updateCartCount(user.token, cartCount)
                        .then(response => { });
                })
                .catch(err => {
                    if (err.response) setError(err.response.data);
                    else setError("Adding to cart failed!");
                })
        }
        else {
            setSuccess(false);
            setError("Please Login First!!");
        }
    }

    return (
        <Layout title='Product Page'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><a href="/">Product List</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{product.category ? product.category.name : ""}</li>
                </ol>
            </nav>
            <div>
                {showSuccess(success, 'Item Added to Cart!')}
                {showError(error, error)}
            </div>
            <div className="row container">
                <div className="col-6">
                    <img
                        src={`${API}/product/photo/${product._id}`}
                        alt={product.name}
                        width="100%"
                    />
                </div>
                <div className="col-6">
                    <h3>{product.name}</h3>
                    <span style={{ fontSize: 20 }}>&#2547;</span>{product.price}
                    <p>
                        {product.cartQuantity ? (<span className="badge badge-pill badge-primary">In Stock [{product.cartQuantity}]</span>) : (<span className="badge badge-pill badge-danger">Out of Stock</span>)}
                        <span style={{ marginLeft: 10 }}>[ {product.soldUnit} units sold out of {product.quantity} units ]</span>
                    </p>
                    <p>{product.description}</p>
                    {product.quantity ? <>&nbsp;<button className="btn btn-outline-primary btn-md" onClick={handleAddToCart(product)}>Add to Cart</button></> : ""}
                    <div>
                        <h3 style={{ padding: 4 }}>Please add a review for the product</h3>
                        <div className={Star}>
                            <div class="rate">
                                <input type="radio" id="star5" name="rate" value="5" />
                                <label for="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="rate" value="4" />
                                <label for="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="rate" value="3" />
                                <label for="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="rate" value="2" />
                                <label for="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="rate" value="1" />
                                <label for="star1" title="text">1 star</label>
                            </div>
                        </div>
                        <div >
                            <label htmlFor='reviewdescription'></label>
                            <textarea name='reviewdescription'></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetails;