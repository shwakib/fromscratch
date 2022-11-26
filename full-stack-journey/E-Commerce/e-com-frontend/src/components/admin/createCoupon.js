import React, { useState } from 'react';
import Layout from '../Layout';
import { showError, showSuccess, showLoading } from '../../utils/messages';
import { Link } from 'react-router-dom';
import { createCoupon } from '../../api/apiAdmin';
import { userInfo } from '../../utils/auth';

const CreateCoupon = () => {
    const [coupons, setCoupons] = useState({
        code: '',
        percentage: "",
        description: "",
        error: false,
        success: false,
        loading: false
    });

    const { code, percentage, description, error, success, loading } = coupons;

    const handleSubmit = (e) => {
        e.preventDefault();
        setCoupons({
            ...coupons,
            loading: true,
            error: false,
            success: false
        });
        const { token } = userInfo();
        const data = {
            code: code,
            percentage: percentage / 100,
            description: description
        }
        createCoupon(token, data)
            .then(response => {
                setCoupons({
                    ...coupons,
                    code: '',
                    percentage: "",
                    description: "",
                    error: false,
                    success: true,
                    loading: false
                })
            })
            .catch(err => {
                if (err.response) setCoupons({
                    ...coupons,
                    success: false,
                    error: err.response.data,
                    loading: false
                })
                else {
                    setCoupons({
                        ...coupons,
                        success: false,
                        error: "Something Went Wrong!!",
                        loading: false
                    })
                }
            })
    }

    const handleChange = (e) => {
        setCoupons({
            ...coupons,
            [e.target.name]: e.target.value,
            error: false
        })
    }

    const couponForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-muted">Code</label>
                    <input
                        name="code"
                        style={{ textTransform: "uppercase" }}
                        type="text"
                        onChange={handleChange}
                        value={code}
                        autoFocus
                        required
                        className="form-control"
                    />
                    <label className="text-muted">Percentage</label>
                    <input
                        name="percentage"
                        type="number"
                        onChange={handleChange}
                        value={percentage}
                        autoFocus
                        required
                        className="form-control"
                        maxLength={3}
                    />
                    <label className="text-muted">Description</label>
                    <input
                        name="description"
                        type="text"
                        onChange={handleChange}
                        value={description}
                        autoFocus
                        required
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-outline-primary">Create Coupon</button>
            </form>
        )
    }

    const goBack = () => (<div className="mt-5">
        <Link to="/admin/dashboard" className="text-danger">Go to Dashboard</Link>
    </div>)


    return (
        <Layout title="Add a new Coupon" description="Ready to add a new Coupon?">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showLoading(loading)}
                    {showError(error, error)}
                    {showSuccess(success, 'Coupon Created!')}
                    {couponForm()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    );

}

export default CreateCoupon;