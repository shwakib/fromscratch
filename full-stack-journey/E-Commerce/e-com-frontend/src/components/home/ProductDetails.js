import { useEffect, useState } from 'react';
import Layout from '../Layout';
import { showSuccess, showError } from '../../utils/messages';
import { API } from '../../utils/config';
import { Link, useParams } from 'react-router-dom';
import { getProductDetails, postReview, fetchReviews } from '../../api/apiProducts';
import { addToCart, updateCartCount } from '../../api/apiOrder';
import { isAuthenticated, userInfo } from '../../utils/auth';
import * as Star from '../../App.css';
import Review from './review';

const ProductDetails = (props) => {
    const [product, setProducts] = useState({});
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [submitReview, setPostReview] = useState({
        star: [1, 2, 3, 4, 5],
        comment: ""
    });

    let { id } = useParams();
    const { star, comment } = submitReview;

    useEffect(() => {
        getProductDetails(id)
            .then(response => {
                setProducts(response.data);
            })
            .catch(err => setError("Failed To Load Products"));

        fetchReviews(id)
            .then(response => { setReviews(response.data) })
            .catch(err => console.log(err));
    }, [reviews])

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

    const PostReviewSection = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <h3 style={{ padding: 4 }}>Please add a review for the product</h3>
                    <div className='row '>
                        <div style={{ marginLeft: "5px" }} className={Star}>
                            <div className="rate" >
                                <input type="radio" id="star5" name="star" value={star[4]} onClick={handlechange} />
                                <label htmlFor="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="star" value={star[3]} onClick={handlechange} />
                                <label htmlFor="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="star" value={star[2]} onClick={handlechange} />
                                <label htmlFor="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="star" value={star[1]} onClick={handlechange} />
                                <label htmlFor="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="star" value={star[0]} onClick={handlechange} />
                                <label htmlFor="star1" title="text">1 star</label>
                            </div >
                        </div >
                    </div >
                    <div className='row'>
                        <div style={{ marginLeft: "20px" }}>
                            <p>Review Comment:</p>
                            <label htmlFor='comment'></label>
                            <textarea name='comment' value={comment} onChange={handlechange} style={{ width: "350px", height: "90px" }}></textarea>
                        </div>
                    </div>
                    <button className="btn btn-outline-primary btn-md" style={{ marginLeft: "5px", marginTop: "15px", marginBottom: "30px" }}>Submit Review</button>
                </div >
            </form >
        )
    }

    const handlechange = e => {
        setPostReview({
            ...submitReview,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setPostReview({
            ...submitReview
        });
        const { token, _id } = userInfo();
        // alert(id);
        const reviewData = {
            user: _id,
            star: star,
            comment: comment
        }
        postReview(token, id, reviewData)
            .then(response => {
                setPostReview({
                    star: "",
                    comment: ""
                });
                alert("Review Submitted Successfully!")
            })
            .catch(err => { console.log(err) })
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
                    {PostReviewSection()}
                    {reviews && reviews.map(review => <Review item={review} key={review._id} />)}
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetails;