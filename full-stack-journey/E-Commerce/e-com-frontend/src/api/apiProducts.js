import { API } from '../utils/config';
import axios from 'axios';

export const getProducts = (sortBy, order, limit, skip) => {
    return axios.get(`${API}/product?sortBy=${sortBy}&order=${order}&skip=${skip}&limit=${limit}`)
}

export const getProductDetails = (id) => {
    return axios.get(`${API}/product/${id}`)
}

export const getCategories = () => {
    return axios.get(`${API}/category`)
}

export const getFilteredProducts = (skip, limit, filters = {}, order, sortBy) => {
    const data = {
        order: order,
        sortBy: sortBy,
        limit: limit,
        skip: skip,
        filters: { ...filters }
    }
    return axios.post(`${API}/product/filter`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const postReview = (token, id, data) => {
    return axios.post(`${API}/product/review/${id}`, data, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
}

export const fetchReviews = id => {
    return axios.get(`${API}/product/review/${id}`);
}