import { useState, useEffect } from 'react';
import Layout from '../Layout';
import Card from './Card';
import { showError, showSuccess } from '../../utils/messages';
import { getCategories, getProducts, getFilteredProducts } from '../../api/apiProducts';
import Checkbox from './checkbox';
import RadioBox from './radiobox';
import { prices } from '../../utils/prices';
import { isAuthenticated, userInfo } from '../../utils/auth';
import { addToCart, updateCartCount } from '../../api/apiOrder';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(8);
    const [skip, setSkip] = useState(0);
    const [categories, setCategories] = useState([]);
    const [order, setOrder] = useState('desc');
    const [sortBy, setSortBy] = useState('name');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [filters, setFilters] = useState({
        category: [],
        price: []
    });

    useEffect(() => {
        getProductsAtLoad();

        getCategories()
            .then(response => setCategories(response.data))
            .catch(err => setError("Failed to load categories!"));
    }, [])

    const getProductsAtLoad = () => {
        getProducts(sortBy, order, limit, skip)
            .then(response => { setProducts(response.data) })
            .catch(err => setError("Failed to load products!"));
    }

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

    const handleFilters = (myfilters, filterBy) => {
        const newFilters = { ...filters };
        let newOrder = order;
        let newSortBy = sortBy;
        if (filterBy === 'category') {
            newFilters[filterBy] = myfilters;
        }

        if (filterBy === 'soldunit') {
            // alert(filterBy);
            newFilters[filterBy] = myfilters;
        }

        if (filterBy === 'price') {
            const data = prices;
            let arr = [];
            for (let i in data) {
                if (data[i].id === parseInt(myfilters)) {
                    arr = data[i].arr;
                }
            }
            newFilters[filterBy] = arr;
        }

        if (filterBy === 'order') {
            // newFilters[filterBy] = myfilters;
            newSortBy = 'price';
            newOrder = myfilters;
        }
        setFilters(newFilters);

        getFilteredProducts(skip, limit, newFilters, newOrder, newSortBy)
            .then(response => setProducts(response.data))
            .catch(err => setError("Failed to load Products!!"))
    }

    const showFilters = () => {
        return (<>
            <div className='row'>
                <div className='col-sm-3'>
                    <h5>Filter By categories:</h5>
                    <ul>
                        <Checkbox categories={categories} handleFilters={myfilters => handleFilters(myfilters, 'category')} />
                    </ul>
                </div>
                <div className='col-sm-5'>
                    <h5>Filter By Price:</h5>
                    <div className='row'>
                        <RadioBox prices={prices} handleFilters={myfilters => handleFilters(myfilters, 'price')} />
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='row'>
                        <li className="list-unstyled" style={{ margin: "10px 0 15px 25px" }}>
                            <input type="checkbox" className="form-check-input" onChange={myfilters => handleFilters(myfilters, 'soldunit')} />
                            <label className="form-check-label">Show Sold Products</label>
                        </li>
                    </div>
                    <div className='row'>
                        <label style={{ marginRight: 15 }} htmlFor="priceorder" >Choose price Order:</label>
                        <select defaultValue={"Selected"} name="priceorder" id="priceorder" onChange={(e) => handleFilters(e.target.value, 'order')} style={{ width: "120px" }}>
                            <option value={"Selected"} disabled="disabled">Select One</option>
                            <option value="asc">Low to High</option>
                            <option value="desc">High to Low</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
        )
    }

    const loadMoreButton = () => {
        return (<>
            <div>
                <button onClick={loadMoreItems} style={{
                    position: "relative",
                    bottom: "10px",
                    left: "660px",
                    width: "150px",
                    borderRadius: "5%"
                }}>Load More</button>
            </div>
        </>)
    }

    const loadMoreItems = () => {
        setSkip(skip + limit);
        getProductsAtLoad();
    }

    return (
        <Layout title="Home Page" className="container-fluid">
            {showFilters()}
            <div style={{ width: "100%" }}>
                {showError(error, error)}
                {showSuccess(success, "Added to cart successfully!")}
            </div>
            <div className="row">
                {products && products.map(product => <Card product={product} key={product._id} handleAddToCart={handleAddToCart(product)} />)}
            </div>
            <div className="row">
                {loadMoreButton()}
            </div>
        </Layout>
    )
}

export default Home;