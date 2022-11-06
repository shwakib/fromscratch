import { useState, useEffect } from 'react';
import Layout from '../Layout';
import Card from './Card';
import { showError, showSuccess } from '../../utils/messages';
import { getCategories, getProducts, getProductDetails } from '../../api/apiProducts';
import Checkbox from './checkbox';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(30);
    const [categories, setCategories] = useState([]);
    const [order, setOrder] = useState('desc');
    const [sortBy, setSortBy] = useState('createdAt');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        getProducts(sortBy, order, limit)
            .then(response => setProducts(response.data))
            .catch(err => setError("Failed to load products!"));

        getCategories()
            .then(response => setCategories(response.data))
            .catch(err => setError("Failed to load categories!"));
    }, [])

    const showFilters = () => {
        return (<>
            <div className='row'>
                <div className='col-sm-3'>
                    <h5>Filter By categories:</h5>
                    <ul>
                        <Checkbox categories={categories} />
                    </ul>
                </div>
            </div>
        </>
        )
    }

    return (
        <Layout title="Home Page" className="container-fluid">
            {showFilters()}
            <div style={{ width: "100%" }}>
                {showError(error, error)}
                {showSuccess(success, "Added to cart successfully!")}
            </div>
            <div className="row">
                {products && products.map(product => <Card product={product} key={product._id} />)}
            </div>
        </Layout>
    )
}

export default Home;