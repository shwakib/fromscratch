import axios from 'axios';
import { API } from '../utils/config';

export const purchaseHistory = (token, data) => {
    return axios.post(`${API}/user/purchasehistory`, data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}